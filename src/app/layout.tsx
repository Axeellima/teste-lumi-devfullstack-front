import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/Header/Header"
import TabAside from "@/components/TabAside/TabAside"
import Head from "next/head"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Teste Full Stack Lumi",
  description: "Teste Full Stack Lumi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="../assets/favicon.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <TabAside />
          {children}
        </main>
      </body>
    </html>
  )
}
