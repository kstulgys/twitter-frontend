import React, { useState, useEffect } from "react"
import store from "./Store"
import { getUserData } from "./API"

export default function Profile() {
  const { state, setState } = store.useStore()

  return (
    <div>
      <div>
        <img
          src={state.user.profile_image_url}
          alt="user-image"
          className="rounded-circle shadow profile-image"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="mt-3">
        <h5>{state.user && state.user.name}</h5>
        <h6 className="font-weight-bold text-muted my-1">
          @{state.user && state.user.screen_name}
        </h6>
        <p className="text-muted">{state.user && state.user.location}</p>
      </div>
    </div>
  )
}
