import React, { useContext, useState, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"

export const AnimalForm = (props) => {
  // Use the required context providers for data
  const { locations, getLocations } = useContext(LocationContext)
  const { addAnimal } = useContext(AnimalContext)

  // Component state
  const [animal, setAnimal] = useState({})

  const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    console.log("********handleControlledInputChange Executes***********")
    console.log(event.target)
    console.log("current state variable animal", animal)

    const newAnimal = Object.assign({}, animal)
    console.log("new object that's a copy of animal state variable", newAnimal)
    
    newAnimal[event.target.name] = event.target.value
    console.log("newAnimal after modification", newAnimal)
    
    setAnimal(newAnimal)
  }

  // Get locations from API when component initializes
  useEffect(() => {
    getLocations()
  }, [])

  const constructNewAnimal = () => {
    const locationId = parseInt(animal.locationId)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addAnimal({
        name: animal.name,
        breed: animal.breed,
        locationId: locationId,
        treatment: animal.treatment,
        customerId: parseInt(localStorage.getItem("kennel_customer"))
      })
        .then(() => props.history.push("/animals"))
    }
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">Admit Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name: </label>
          <input type="text" name="name" required autoFocus className="form-control"
            placeholder="Animal name"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="breed">Animal breed: </label>
          <input type="text" name="breed" required className="form-control"
            placeholder="Animal breed"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Location: </label>
          <select name="locationId" className="form-control"
            onChange={handleControlledInputChange}>

            <option value="0">Select a location</option>
            {locations.map(e => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="treatment">Treatments: </label>
          <textarea type="text" name="treatment" className="form-control"
            onChange={handleControlledInputChange}>
          </textarea>
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewAnimal()
        }}
        className="btn btn-primary">
        Make Reservation
      </button>
    </form>
  )

}
