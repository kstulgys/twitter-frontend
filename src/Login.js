import React from "react"
import config from "./config"

export default function Login() {
  return (
    <div className="ml-3">
      <a
        className="btn font-weight-bold text-dark"
        href={`${config.serverUrl}/auth/twitter`}
      >
        Sign In
      </a>
    </div>
  )
}
