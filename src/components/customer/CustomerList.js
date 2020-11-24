import React, { useContext, useEffect } from "react"
import { Customer } from "./Customer"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(
    () => {
      console.log("CustomerList: Initial render before data")
      getCustomers()
    },
    []
  )

  return (
    <div className="customers">
      {
        customers.map(customer => <Customer key={customer.id} customer={customer} />)
      }
    </div>
  )
}
