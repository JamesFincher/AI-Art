import React from "react"
import Header from "../components/Header"
import Summary from "../components/Summary"
export default function Home() {
  return (
    <div
      id="container"
      className="flex  flex-auto flex-col p-4  bg-bg text-tp min-h-screen"
    >
      <Header id="header" className="p-4 bg-gray-400 flex" />
      <Summary />
    </div>
  )
}
