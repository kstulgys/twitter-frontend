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

import { getUserInfo } from "./API"

import { config } from "dotenv"
config()

function App() {
  const auth = useAuth()
  const { state, setState } = store.useStore()

  async function getUser() {
    const { user = {} } = await getUserInfo(state.authToken)
    const profile_image_url = user.profile_image_url.replace("_normal", "")
    setState(state => {
      state.user = user
      state.user.profile_image_url = profile_image_url
    })
  }

  useEffect(() => {
    if (state.authToken) {
      getUser()
    }
  }, [state.authToken])

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
