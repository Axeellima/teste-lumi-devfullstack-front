"use client"
import {
  SubtitleDetachText,
  SubtitleLightText,
  TitleDetachText,
} from "@/styles/global"
import React, { useState } from "react"
import { Line } from "react-chartjs-2"
import * as Styled from "./Style"
import axios from "axios"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import styled from "styled-components"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const DashboardContainer = styled.div`
  padding: 20px;
  flex: 1;
  width: 100%;
`

const DashboardPage: React.FC<{ data: any }> = ({ data }) => {
  const [financialData, setFinancialData] = useState<any[]>(data)

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Out",
    "Nov",
    "Dez",
  ]
  const eeConsumption = financialData.map((item) => item.totalEEConsume)
  const gdrEconomy = financialData.map((item) => item.totalEconomyGDRConsume)
  const totalValueBills = financialData.map((item) => item.totalValueBills)
  const totalValueBillsWithoutGDR = financialData.map(
    (item) => item.totalValueBillsWithoutGDR
  )

  const consumptionData = {
    labels: months,
    datasets: [
      {
        label: "Consumo de Energia Elétrica (kWh)",
        data: eeConsumption,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Economia de GDR (kWh)",
        data: gdrEconomy,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  }

  const billingData = {
    labels: months,
    datasets: [
      {
        label: "Valor Total das Faturas",
        data: totalValueBills,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Valor Total sem Compensatório (GDR)",
        data: totalValueBillsWithoutGDR,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  }

  const totalEEConsume = eeConsumption.reduce((acc, val) => acc + val, 0)
  const totalFaturas = totalValueBills.reduce((acc, val) => acc + val, 0)

  return (
    <DashboardContainer>
      <TitleDetachText>Dashboard</TitleDetachText>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "600px", marginTop: 10 }}>
          <h3>Consumo de Energia Elétrica vs Economia GDR</h3>
          <Line data={consumptionData} />

          <h3>Valor das Faturas</h3>
          <Line data={billingData} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Styled.CardInfo>
            <SubtitleDetachText>
              Energia Total Consumida (kWh)
            </SubtitleDetachText>
            <SubtitleLightText>
              {totalEEConsume.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}{" "}
            </SubtitleLightText>
          </Styled.CardInfo>
          <Styled.CardInfo>
            <SubtitleDetachText>
              Valor Total das Faturas (R$)
            </SubtitleDetachText>
            <SubtitleLightText>
              {totalFaturas.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </SubtitleLightText>
          </Styled.CardInfo>
        </div>
      </div>
    </DashboardContainer>
  )
}

export default DashboardPage
