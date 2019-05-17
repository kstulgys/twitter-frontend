import React, { useState, useEffect } from "react"
import Login from "./Login"
import store from "./Store"
import { searchTweets, createTweet } from "./API"
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormTextarea
} from "shards-react"

export default function NavBar() {
  const { state, setState } = store.useStore()
  const [searchQuery, setSearchQuery] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    await setTweets(searchQuery)
    setSearchQuery("")
  }

  function signout() {
    window.localStorage.removeItem("authToken")
    setState(state => {
      state.authToken = null
      state.tweets = []
      state.timelineTweets = []
    })
  }

  async function setTweets(query) {
    const res = await searchTweets({ authToken: state.authToken, query })
    console.log(res)
    setState(state => {
      state.timelineTweets = res.tweets.statuses
    })
  }

  return (
    <nav className="shadow py-2 bg-white">
      <div className="container d-flex align-items-center justify-content-between">
        <span>
          <i class="fab fa-twitter fa-2x" />
        </span>
        <div className="d-flex">
          {state.authToken && (
            <form onSubmit={handleSubmit}>
              <div class="input-group input-group-seamless">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-search" />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with checkbox"
                  placeholder="search tweets"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          )}
          <div className="d-flex align-items-center">
            {state.authToken ? (
              <>
                <div class="nav-image">
                  <img
                    src={state.user && state.user.profile_image_url}
                    alt="..."
                    class="rounded-circle mx-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span class="badge badge-dark nav-logout" onClick={signout}>
                    <p>Logout</p>
                  </span>
                </div>
                <TweetModal />
              </>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

function TweetModal() {
  const { state, setState } = store.useStore()
  const [open, toggle] = useState(false)
  const [value, setValue] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await createTweet({
        authToken: state.authToken,
        update: value
      })
      console.log(res)
      setState(state => {
        state.tweets.unshift(res.tweet)
        state.timelineTweets.unshift(res.tweet)
      })
      setValue("")
      toggle(false)
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div>
      <Button
        className="btn btn-outline-dark btn-pill"
        onClick={() => toggle(!open)}
      >
        tweet
      </Button>
      <Modal open={open} toggle={() => toggle(!open)}>
        <ModalBody>
          <div>
            <p className="mb-2">
              {!value && "🤔 Waiting for you to say something..."}
            </p>
            <FormTextarea onChange={e => setValue(e.target.value)} />
          </div>
          <Button
            className="btn btn-outline-dark btn-pill mt-4"
            onClick={handleSubmit}
          >
            submit
          </Button>
        </ModalBody>
      </Modal>
    </div>
  )
}
