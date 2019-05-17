import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./styles.css"

import React, { useState, useEffect } from "react"
import { render } from "react-dom"

import NavBar from "./NavBar"
import Container from "./Container"
import Welcome from "./Welcome"

import store from "./Store"
import useAuth from "./useAuth"

function App() {
  const auth = useAuth()
  const { state, setState } = store.useStore()

  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <NavBar />
      {state.authToken ? <Container /> : <Welcome />}
    </div>
  )
}

render(
  <store.Provider>
    <App />
  </store.Provider>,
  document.getElementById("root")
)
