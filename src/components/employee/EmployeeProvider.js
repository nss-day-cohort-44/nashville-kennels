import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const EmployeeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const EmployeeProvider = (props) => {

  const [employees, setEmployees] = useState([]) 
  // useState returns [initial value of state variable, a function to set the value of the state variable]

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
      .then(res => res.json())
      .then(setEmployees)
      // .then(parsedEmployees => setEmployees(parsedEmployees))
  }

  const addEmployee = employee => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    })
      .then(getEmployees)
  }

  return (
    <EmployeeContext.Provider value={
      {
      employees, addEmployee, getEmployees
      }
    }>
      {props.children}
    </EmployeeContext.Provider>
  )
}
