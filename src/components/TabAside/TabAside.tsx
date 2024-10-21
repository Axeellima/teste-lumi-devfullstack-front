"use client"
import Image from "next/image"
import * as Styled from "./Style"
import TasksSVG from "@/assets/icons/tasks.svg"
import DashboardSVG from "@/assets/icons/dashboard.svg"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const TabAside = () => {
  const router = useRouter()
  const pathName = usePathname() // Use isso se estiver no Next.js 13
  // const pathName = router.pathname; // Use isso se estiver no Next.js abaixo da versão 13

  return (
    <Styled.TabAsideContainer>
      <Styled.TabCard onClick={() => router.push("/dashboard")}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_105_405)">
            <path
              d="M3.5 10.6333C3.33431 10.6333 3.2 10.499 3.2 10.3333V4C3.2 3.83431 3.33431 3.7 3.5 3.7H8.16667C8.33235 3.7 8.46667 3.83431 8.46667 4V10.3333C8.46667 10.499 8.33235 10.6333 8.16667 10.6333H3.5ZM3.5 17.3C3.33431 17.3 3.2 17.1657 3.2 17V14C3.2 13.8343 3.33431 13.7 3.5 13.7H8.16667C8.33235 13.7 8.46667 13.8343 8.46667 14V17C8.46667 17.1657 8.33235 17.3 8.16667 17.3H3.5ZM11.8333 17.3C11.6676 17.3 11.5333 17.1657 11.5333 17V10.6667C11.5333 10.501 11.6676 10.3667 11.8333 10.3667H16.5C16.6657 10.3667 16.8 10.501 16.8 10.6667V17C16.8 17.1657 16.6657 17.3 16.5 17.3H11.8333ZM11.5333 4C11.5333 3.83431 11.6676 3.7 11.8333 3.7H16.5C16.6657 3.7 16.8 3.83431 16.8 4V7C16.8 7.16569 16.6657 7.3 16.5 7.3H11.8333C11.6676 7.3 11.5333 7.16569 11.5333 7V4Z"
              stroke={pathName === "/invoices" ? "#323C47" : "#109CF1"}
              stroke-width="1.4"
            />
          </g>
          <defs>
            <clipPath id="clip0_105_405">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <h3
          style={{
            letterSpacing: -0.5,
            color: pathName === "/invoices" ? "#323C47" : "#109CF1",
          }} // Corrigido
        >
          Dashboard
        </h3>
      </Styled.TabCard>

      <Styled.TabCard onClick={() => router.push("/invoices")}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_105_239)">
            <path
              d="M2.50008 3.7H16.6667C16.7385 3.7 16.8001 3.7616 16.8001 3.83333V8.83333C16.8001 8.90507 16.7385 8.96667 16.6667 8.96667H2.50008C2.42835 8.96667 2.36675 8.90507 2.36675 8.83333V3.83333C2.36675 3.7616 2.42835 3.7 2.50008 3.7ZM2.50008 12.0333H16.6667C16.7385 12.0333 16.8001 12.0949 16.8001 12.1667V17.1667C16.8001 17.2384 16.7385 17.3 16.6667 17.3H2.50008C2.42835 17.3 2.36675 17.2384 2.36675 17.1667V12.1667C2.36675 12.0949 2.42835 12.0333 2.50008 12.0333Z"
              stroke={pathName === "/dashboard" ? "#323C47" : "#109CF1"}
              stroke-width="1.4"
            />
          </g>
          <defs>
            <clipPath id="clip0_105_239">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <h3
          style={{
            letterSpacing: -0.5,
            color: pathName === "/dashboard" ? "#323C47" : "#109CF1", // Corrigido
          }}
        >
          Biblioteca
        </h3>
      </Styled.TabCard>
    </Styled.TabAsideContainer>
  )
}
export default TabAside
