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

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>
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
          </EmployeeProvider>
        </LocationProvider>
      </AnimalProvider>
    </>
  )
}
