import React, { useState, useEffect } from "react"
import Tweet from "./Tweet"
import store from "./Store"
import { getUserTweets, getFavouriteTweets } from "./API"

export default function MyTweets() {
  const { state, setState } = store.useStore()
  const [active, setActive] = useState("tweets")

  async function setTweets() {
    const res = await getUserTweets({ authToken: state.authToken })
    setState(state => {
      state.tweets = res.tweets
    })
  }

  async function setFavouriteTweets() {
    try {
      const res = await getFavouriteTweets({
        authToken: state.authToken,
        name: state.user.screen_name
      })
      setState(state => {
        state.favorites = res.tweets
      })
      console.log("favs", state.favorites)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    setTweets()
    setFavouriteTweets()
  }, [])

  return (
    <div>
      <div className="d-flex mb-4" style={{ justifyContent: "space-evenly" }}>
        <button class="btn btn-link">
          <h4
            className={`${active === "tweets" ? "font-weight-bold" : ""}`}
            onClick={() => setActive("tweets")}
          >
            tweets
          </h4>
        </button>

        <button class="btn btn-link">
          <h4
            className={`${active === "favorites" ? "font-weight-bold" : ""}`}
            onClick={() => setActive("favorites")}
          >
            favorites
          </h4>
        </button>
      </div>
      {active === "tweets" ? (
        <UserTweets tweets={state.tweets && state.tweets} />
      ) : (
        <FavoriteTweets tweets={state.favorites && state.favorites} />
      )}
    </div>
  )
}

function UserTweets({ tweets }) {
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
  console.log("tweets fav", tweets)
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
