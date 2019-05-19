import React, { useState, useEffect } from "react"
import Tweet from "./Tweet"
import store from "./Store"
import { getTimelineTweets } from "./API"

export default function Feed() {
  const { state, setState } = store.useStore()

  async function setTweets() {
    try {
      const res = await getTimelineTweets({ authToken: state.authToken })
      setState(state => {
        state.tweets = res.tweets
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    setTweets()
  }, [])

  return (
    <div>
      <button className="btn btn-link">
        <h4 className="mb-4 font-weight-bold">feed</h4>
      </button>
      {state.tweets && state.tweets.length > 1 ? (
        state.tweets.map(tweet => {
          return <Tweet key={tweet.id} tweet={tweet} />
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
