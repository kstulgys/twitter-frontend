import React, { useState, useEffect } from "react"
import Profile from "./Profile"
import Feed from "./Feed"
import MyTweets from "./MyTweets"

export default function Container({ tweets, tweetsGeneral }) {
  return (
    <div className="container mt-5 d-flex min-vh-100 justify-content-between">
      <section>
        <Profile />
      </section>
      <section className="w-100 text-center mx-5">
        <Feed tweetsGeneral={tweetsGeneral} />
      </section>
      <section className="w-100 text-center">
        <MyTweets tweets={tweets} />
      </section>
    </div>
  )
}
