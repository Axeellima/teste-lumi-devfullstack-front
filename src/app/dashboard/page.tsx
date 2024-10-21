import DashboardPage from "@/screens/dashboard/dashboard"
import { getAllUnitConsumer, getFinancialResults } from "@/services/api/bills"
import React from "react"

const Dashboard: React.FC = async () => {
  let data = await getFinancialResults()
  return <DashboardPage data={data} />
}

export default Dashboard
