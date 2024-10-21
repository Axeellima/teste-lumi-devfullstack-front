import styled from "styled-components"

const TableContainer = styled.div`
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.8);
`

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
`

const TableHeader = styled.th`
  color: white;
  padding: 10px;
  max-lines: 2;
  font-size: 14px;
  text-align: center; /* Centraliza o cabeçalho */
  text-overflow: ellipsis; /* Aplica ellipsis */
  white-space: normal; /* Permite quebras de linha */
  max-width: 150px;
`

const TableData = styled.td`
  padding: 10px;
  align-content: baseline;
  max-width: 200px;
  max-height: 20px;
`

const MonthIcon = styled.span<{ hasBill: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ hasBill }) => (hasBill ? "#323C47" : "#90A0B7")};
  margin: 2px;
`

export { MonthIcon, TableData, TableHeader, Table, TableContainer }
