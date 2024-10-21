"use server"

import InvoicesPage from "@/screens/invoices/invoices"
import { getAllUnitConsumer } from "@/services/api/bills"
import React, { useEffect, useState } from "react"

const Invoices: React.FC = async () => {
  let data = await getAllUnitConsumer({})
  return <InvoicesPage data={data} />
}
export default Invoices
