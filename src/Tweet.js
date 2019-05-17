import React, { useState, useEffect } from "react"
import store from "./Store"
import { setFavouriteTweet } from "./API"

export default function Tweet({ tweet }) {
  const { state, setState } = store.useStore()

  async function handleFavorite() {
    const res = await setFavouriteTweet({
      authToken: state.authToken,
      id: tweet.id_str
    })
    // setState(state => {
    //   state.favorites.push(res.tweet)
    // })
  }

  return (
    <div className="shadow w-100 rounded d-flex p-3 mb-3 bg-white">
      <div className="mt-1">
        <img
          src={tweet && tweet.user.profile_image_url}
          alt="..."
          class="rounded-circle shadow"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
      <div className="d-flex flex-column">
        <div className="text-left ml-3 ">
          <div className="">
            <span
              style={{ fontSize: "14px" }}
              className="font-weight-bold mr-1"
            >
              {tweet && tweet.user.name}
            </span>
            <span
              style={{ fontSize: "14px" }}
              className="font-weight-bold text-muted"
            >
              @{tweet && tweet.user.screen_name}
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
              <i class="far fa-comment" />
            </span>
            <span>
              <i class="fas fa-retweet" />
            </span>
            {tweet.favorited ? (
              <span>
                <i class="fas fa-heart" />
              </span>
            ) : (
              <span onClick={handleFavorite}>
                <i class="far fa-heart" />
              </span>
            )}
            <span>
              <i class="far fa-envelope" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
