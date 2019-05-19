import React, { useState, useEffect } from "react"
import Profile from "./Profile"
import Feed from "./Feed"
import UserTweets from "./UserTweets"

export default function Container() {
  return (
    <div className="container mt-5 d-flex min-vh-100 justify-content-between">
      <section>
        <Profile />
      </section>
      <section className="w-100 text-center mx-5">
        <Feed />
      </section>
      <section className="w-100 text-center">
        <UserTweets />
      </section>
    </div>
  )
}
