import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalDetail = (props) => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

  // useState is a React hook or a function that takes one argument (That argument is the initial value of your state variable.) and returns an array (The array contains two items. The first item is the single argument you passed in to useState, the initial value of your state variable. The second item in the array is a function that you must use to set the value of the state variable anywhere in your code. This means you cannot just set the state variable equal to a new value. You must call this function and pass in the new value you want to the state variable to equal.)
  const [animal, setAnimal] = useState({ location: {}, customer: {} })
  // The above line written out with no array destructuring:
  // const returnValueOfUseStateFunction = useState({location: {}, customer: {}})
  // const animal = returnValueOfUseStateFunction[0]
  // const setAnimal = returnValueOfUseStateFunction[1]

  // const [test, setTest] = useState("It's almost the holidays")

  useEffect(() => {
    // console.log("animal before fetch call", animal)
    console.log("animal", animal)
    console.log("setAnimal", setAnimal)
    getAnimalById(props.match.params.animalId)
      .then(parsedAnimal => setAnimal(parsedAnimal))
  }, [])

  // debugger

  return (
    <>
      {/* {console.log(animal)} */}
      <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">Location: {animal.location.name}</div>
        <div className="animal__owner">Customer: {animal.customer.name}</div>

        <button className="btn--release"
          onClick={() => {
            // Code to delete animal from database
            // releaseAnimal(props.match.params.animalId)
            releaseAnimal(animal.id)
            .then(() => props.history.push("/animals"))
          }}
        >Release</button>
      </section>
    </>
  )
}
