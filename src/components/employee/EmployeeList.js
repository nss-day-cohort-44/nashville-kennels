import React, { useContext, useEffect } from "react"
import { Employee } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = (props) => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(
    () => {
      console.log("EmployeeList: Initial render before data")
      getEmployees()
    },
    []
  )

  return (
    <div>
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
        </button>
      <article className="employees">
        {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
      </article>
    </div>
  )
}
