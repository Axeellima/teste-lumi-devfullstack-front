"use client"
import Search from "@/components/Search/Search"
import { getAllUnitConsumer, getDownloadBill } from "@/services/api/bills"
import { TitleDetachText } from "@/styles/global"
import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import * as Styled from "./Style"

const InvoicesContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`

const InvoicesPage: React.FC<{ data: any }> = ({ data }) => {
  const [clientNumber, setClientNumber] = useState<string>("")
  const [dataList, setDataList] = useState<any[]>(data || [])
  const [year, setYear] = useState<number>(new Date().getFullYear())

  const handleClientNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientNumber(e.target.value)
  }

  const handleYearChange = (newYear: number) => {
    setYear(newYear)
  }

  const handleLoadDataList = async () => {
    let res
    let clientNumberFormat = clientNumber ? Number(clientNumber) : 0
    if (clientNumberFormat && !isNaN(clientNumberFormat)) {
      res = await getAllUnitConsumer({ year, clientNumber: clientNumberFormat })
    } else {
      res = await getAllUnitConsumer({ year })
    }
    if (res && res.length >= 0) {
      setDataList(res)
    }
  }

  useMemo(() => {
    handleLoadDataList()
  }, [clientNumber, year])

  const abbreviatedMonth = (monthIndex: number) => {
    return new Date(0, monthIndex).toLocaleString("pt-BR", { month: "short" })
  }

  const handleDownloadBill = async (billId: string) => {
    const response: any = await getDownloadBill({ id: billId })
    console.log(response)
    if (response) {
      const blob = new Blob([response.data], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `fatura_${billId}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } else {
      console.error("Falha no download da fatura")
    }
  }

  return (
    <InvoicesContainer>
      <TitleDetachText>Biblioteca de Faturas</TitleDetachText>
      <Search
        handleClientNumberChange={handleClientNumberChange}
        clientNumber={clientNumber}
        year={year}
        handleYearChange={handleYearChange}
      />

      <Styled.Table>
        <thead>
          <tr
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#109cf1",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <Styled.TableHeader>Unidade C.</Styled.TableHeader>
            <Styled.TableHeader>Número</Styled.TableHeader>
            <Styled.TableHeader>Distribuidor</Styled.TableHeader>

            {Array.from({ length: 12 }, (_, i) => (
              <Styled.TableHeader key={i}>
                {abbreviatedMonth(i)}
              </Styled.TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList.map((unit: any, i) => (
            <tr
              key={unit.id}
              style={{
                maxHeight: 80,
                backgroundColor: i % 2 === 0 ? "#ececec" : "#FFFFFF",
              }}
            >
              <Styled.TableData>{unit.name}</Styled.TableData>
              <Styled.TableData>{unit.number}</Styled.TableData>
              <Styled.TableData>{unit.distributor}</Styled.TableData>
              {Array.from({ length: 12 }, (_, index) => {
                const monthIndex = index + 1
                const billExists = unit.bills.find(
                  (bill: { referenceMonth: number; id: string }) =>
                    bill.referenceMonth + 1 === monthIndex
                )

                return (
                  <Styled.TableData
                    key={index}
                    onClick={
                      billExists
                        ? () => handleDownloadBill(billExists.id)
                        : undefined
                    }
                  >
                    <Styled.MonthIcon hasBill={billExists} />
                  </Styled.TableData>
                )
              })}
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </InvoicesContainer>
  )
}

export default InvoicesPage
