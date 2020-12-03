import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {

  const [animals, setAnimals] = useState([])
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const [searchTerms, setTerms] = useState("")

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then(res => res.json())
      .then(setAnimals)
    // .then(parsedAnimals => setAnimals(parsedAnimals))
  }

  const addAnimal = animal => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    })
      .then(getAnimals)
  }

  const getAnimalById = (id) => {
    return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
      .then(res => res.json())
  }

  const releaseAnimal = animalId => {
    return fetch(`http://localhost:8088/animals/${animalId}`, {
      method: "DELETE"
    })
      .then(getAnimals)
  }

  const updateAnimal = animal => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(animal)
    })
        .then(getAnimals)
}

  return (
    <AnimalContext.Provider value={
      {
        animals, addAnimal, getAnimals, getAnimalById, setTerms, searchTerms, releaseAnimal, updateAnimal
      }
    }>
      {props.children}
    </AnimalContext.Provider>
  )
}
