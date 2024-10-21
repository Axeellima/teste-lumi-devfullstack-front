import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: var(--color-white);
  z-index: 10;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-gray);
`

const HeaderDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export { HeaderContainer, HeaderDivContainer }
