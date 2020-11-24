import React from "react"
import { Animal } from "./animal/Animal"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { ApplicationViews } from "./ApplicationViews"
import { Customer } from "./customer/Customer"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { Employee } from "./employee/Employee"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import "./Kennel.css"
import { Location } from "./location/Location"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { NavBar } from "./nav/NavBar"

export const Kennel = () => (
  <>
    <NavBar />
    <ApplicationViews />
  </>
)
