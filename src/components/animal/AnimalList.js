import React, { useContext, useEffect } from "react"
import { Animal } from "./Animal"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  useEffect(
    () => {
      console.log("AnimalList: Initial render before data")
      getAnimals()
    },
    []
  )

  return (
    <div className="animals">
      {
        animals.map(animal => <Animal key={animal.id} animal={animal} />)
      }
    </div>
  )
}
