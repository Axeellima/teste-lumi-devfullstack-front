import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Sistema de Faturas</h1>
      <Link href="/dashboard">Ir para Dashboard</Link>
      <Link href="/invoices">Ir para Biblioteca de Faturas</Link>
    </div>
  )
}
