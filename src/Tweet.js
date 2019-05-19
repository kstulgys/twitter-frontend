import React, { useState, useEffect } from "react"
import store from "./Store"
import { setFavouriteTweet, unfavouriteTweet } from "./API"

export default function Tweet({ tweet }) {
  const { state, setState } = store.useStore()

  async function handleFavorite() {
    let res = await setFavouriteTweet({
      authToken: state.authToken,
      id: tweet.id_str
    })
    const faved = state.tweets.find(favT => favT.id === res.tweet.id)
    if (faved) {
      setState(state => {
        state.favorites.unshift(res.tweet)
        state.tweets.find(favT => favT.id === res.tweet.id).favorited = true
      })
    }
  }

  async function handleUnFavorite() {
    let res = await unfavouriteTweet({
      authToken: state.authToken,
      id: tweet.id_str
    })
    const unfaved = state.tweets.find(favT => favT.id === res.tweet.id)
    if (unfaved) {
      const unfavedIdx = state.favorites.findIndex(fav => fav.id === unfaved.id)
      setState(state => {
        state.favorites.splice(unfavedIdx, 1)
        state.tweets.find(favT => favT.id === unfaved.id).favorited = false
      })
    }
  }

  return (
    <div className="shadow w-100 rounded d-flex p-3 mb-3 bg-white">
      <div className="mt-1">
        <img
          src={tweet && tweet.user && tweet.user.profile_image_url}
          alt="..."
          className="rounded-circle shadow"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
      <div className="d-flex flex-column  w-100">
        <div className="text-left ml-3 ">
          <div className="">
            <span
              style={{ fontSize: "14px" }}
              className="font-weight-bold mr-1"
            >
              {tweet && tweet.user && tweet.user.name}
            </span>
            <span
              style={{ fontSize: "14px" }}
              className="font-weight-bold text-muted"
            >
              @{tweet && tweet.user && tweet.user.screen_name}
            </span>
          </div>
          <div className="">
            <p className="text-left" style={{ fontSize: "14px" }}>
              {tweet && tweet.text}
            </p>
          </div>
        </div>
        <div className="ml-3 mt-3">
          <div className="d-flex w-50 align-items-center justify-content-between">
            <span>
              <i className="far fa-comment" />
            </span>
            <span>
              <i className="fas fa-retweet" />
            </span>
            {tweet.favorited ? (
              <span onClick={handleUnFavorite}>
                <i className="fas fa-heart" />
              </span>
            ) : (
              <span onClick={handleFavorite}>
                <i className="far fa-heart" />
              </span>
            )}
            <span>
              <i className="far fa-envelope" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
