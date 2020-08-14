import React from "react"
import Routes from "./routes"
import { StatusBar } from "react-native"
 
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#2c3e50" translucent barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App
