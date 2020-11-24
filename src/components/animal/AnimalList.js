import React, { useContext, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(
    () => {
      console.log("AnimalList: Initial render before data")
      getLocations()
        .then(getCustomers)
        .then(getAnimals)
    },
    []
  )

  return (
    <div className="animals">
    {/* {console.log(animals, locations, customers)} */}
      {
        animals.map(animal => {
          const owner = customers.find(c => c.id === animal.customerId)
          const clinic = locations.find(l => l.id === animal.locationId)
          // debugger
          return <Animal key={animal.id} animal={animal} location={clinic} customer={owner} />
        })
      }
    </div>
  )
}
