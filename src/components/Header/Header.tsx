"use client"
import Image from "next/image"
import * as Styled from "./Style"
import LogoSVGLumi from "@/assets/logo.svg"
const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderDivContainer>
        <Image width={60} height={60} src={LogoSVGLumi} alt="Logo Lumi" />
        <h1>Lumi Teste Prático</h1>
      </Styled.HeaderDivContainer>

      <Styled.HeaderDivContainer>
        <div>
          <h2>Desenvolvedor Full Stack</h2>
          <h3>Axel Lima</h3>
        </div>
        <image />
      </Styled.HeaderDivContainer>
    </Styled.HeaderContainer>
  )
}
export default Header
