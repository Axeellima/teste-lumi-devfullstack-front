import styled from "styled-components"

const TabAsideContainer = styled.aside`
  background-color: var(--color-white);
  width: 15%;
  max-width: 180px;
  height: 100vh;
  padding: 20px 30px;
  gap: 15px;
  display: flex;
  flex-direction: column;
`

const TabCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  cursor: pointer;
`
export { TabAsideContainer, TabCard }
