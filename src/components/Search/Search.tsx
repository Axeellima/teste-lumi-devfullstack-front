"use client"
import Image from "next/image"
import * as Styled from "./Style"
import TasksSVG from "@/assets/icons/tasks.svg"
import DashboardSVG from "@/assets/icons/dashboard.svg"
import Link from "next/link"
import { SubtitleDetachText } from "@/styles/global"

type SearchProps = {
  handleClientNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleYearChange: (n: number) => void
  year: number
  clientNumber: string
}

const Search = ({
  clientNumber,
  year,
  handleClientNumberChange,
  handleYearChange,
}: SearchProps) => {
  return (
    <Styled.SearchContainer>
      <div>
        <SubtitleDetachText style={{ marginBottom: 6, marginLeft: 5 }}>
          Número do cliente
        </SubtitleDetachText>
        <Styled.InputStyle
          type="text"
          placeholder="Num. cliente"
          value={clientNumber}
          onChange={handleClientNumberChange}
        />
      </div>
      <Styled.ContainerCardYears>
        {Array.from({ length: 5 }, (_, index) => {
          const yearToDisplay = new Date().getFullYear() - index
          return (
            <Styled.CardYears
              style={{
                backgroundColor: year === yearToDisplay ? "#109CF1" : "#53bafa",
              }}
              key={yearToDisplay}
              onClick={() => handleYearChange(yearToDisplay)}
            >
              {yearToDisplay}
            </Styled.CardYears>
          )
        })}
      </Styled.ContainerCardYears>
    </Styled.SearchContainer>
  )
}
export default Search
