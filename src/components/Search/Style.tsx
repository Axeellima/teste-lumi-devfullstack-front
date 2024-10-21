import styled from "styled-components"

const SearchContainer = styled.section`
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 15px 25px;
  flex-direction: column;
  display: flex;
  gap: 15px;
`

const SearchCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`
const InputStyle = styled.input`
  padding: 10px 15px;
  border-radius: 12px;

  border: 1px solid var(--color-gray-dark);
  background-color: 1px solid var(--color-gray);
`

const ContainerCardYears = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const CardYears = styled.button`
  padding: 8px 14px;
  font-size: 14px;
  color: var(--color-white);
  cursor: pointer;
  border-style: none;
  border-radius: 8px;
`

export {
  SearchContainer,
  SearchCard,
  InputStyle,
  ContainerCardYears,
  CardYears,
}
