import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalDetails } from "./animal/AnimalDetail"

export const ApplicationViews = (props) => {
  return (
    <>
      <AnimalProvider>
        <EmployeeProvider>
          <LocationProvider>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
              <LocationList />
            </Route>
            <Route path="/locations/:locationId(\d+)" render={
              props => {
                console.log("props", props)
                return <LocationDetail {...props} />
              }
            } />
          </LocationProvider>
        </EmployeeProvider>
      </AnimalProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>
            <Route path="/animals/:animalId(\d+)" render={
              props => <AnimalDetails {...props} />
            } />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <AnimalProvider>
        <LocationProvider>
          <EmployeeProvider>
            <Route exact path="/employees" render={
              props => {
                console.log("props from react router dom", props)
                return <EmployeeList {...props} message="Hello C44" />
                // <EmployeeList history={props.history} location={props.location} match={props.match} message="Hello C44" />
              }
            } />
            <Route path="/employees/create" render={
              props => <EmployeeForm {...props} />
            } />
            {/* New route for showing employee details */}
            <Route path="/employees/:employeeId(\d+)" render={
              props => {
                console.log("Dynamic route for employee matched", props.match.params)
                return <EmployeeDetail {...props} />
              }
            } />
          </EmployeeProvider>
        </LocationProvider>
      </AnimalProvider>
    </>
  )
}
