import React, { useState, useEffect } from "react"

export default function Welcome() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <div className="text-center">
        <h1 className="mb-4">Wellcome</h1>
        <h1>
          please <span className="font-weight-bold">Sign In</span> with your
          <span className="font-weight-bold"> Twitter</span> account
        </h1>
      </div>
    </div>
  )
}
