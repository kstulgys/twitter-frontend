import React, { useState, useEffect } from "react"
import Tweet from "./Tweet"
import store from "./Store"
import { getUserTweets, getFavouriteTweets } from "./API"

export default function UserTweets() {
  const { state, setState } = store.useStore()
  const [active, setActive] = useState("tweets")

  async function setUserTweets() {
    try {
      const { tweets = [] } = await getUserTweets({
        authToken: state.authToken
      })
      setState(state => {
        state.userTweets = tweets
      })
    } catch (e) {
      console.log(e)
    }
  }

  async function setFavouriteTweets() {
    try {
      const { tweets = [] } = await getFavouriteTweets({
        authToken: state.authToken,
        name: state.user.screen_name
      })
      setState(state => {
        state.favorites = tweets
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    setUserTweets()
    setFavouriteTweets()
  }, [])

  return (
    <div>
      <div className="d-flex mb-4" style={{ justifyContent: "space-evenly" }}>
        <button className="btn btn-link">
          <h4
            className={`${active === "tweets" ? "font-weight-bold" : ""}`}
            onClick={() => setActive("tweets")}
          >
            tweets
          </h4>
        </button>

        <button className="btn btn-link">
          <h4
            className={`${active === "favorites" ? "font-weight-bold" : ""}`}
            onClick={() => setActive("favorites")}
          >
            favorites
          </h4>
        </button>
      </div>
      {active === "tweets" ? (
        <MyTweets tweets={state.userTweets} />
      ) : (
        <FavoriteTweets tweets={state.favorites} />
      )}
    </div>
  )
}

function MyTweets({ tweets }) {
  return (
    <>
      {tweets &&
        tweets.map(tweet => {
          return <Tweet key={tweet.id} tweet={tweet} />
        })}
    </>
  )
}

function FavoriteTweets({ tweets }) {
  return (
    <>
      {tweets &&
        tweets.length > 1 &&
        tweets.map(tweet => {
          return <Tweet key={tweet.id} tweet={tweet} />
        })}
    </>
  )
}
