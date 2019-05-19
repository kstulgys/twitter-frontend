import config from "./config"

export const getFavouriteTweets = async ({ authToken, name }) => {
  return await fetch(`${config.serverUrl}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken, name })
  }).then(r => r.json())
}

export const unfavouriteTweet = async ({ authToken, id }) => {
  return await fetch(`${config.serverUrl}/unfavorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken, id })
  }).then(r => r.json())
}

export const setFavouriteTweet = async ({ authToken, id }) => {
  return await fetch(`${config.serverUrl}/favorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken, id })
  }).then(r => r.json())
}

export const createTweet = async ({ authToken, update }) => {
  return await fetch(`${config.serverUrl}/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken, update })
  }).then(r => r.json())
}

export const searchTweets = async params => {
  return await fetch(`${config.serverUrl}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken: params.authToken, query: params.query })
  }).then(r => r.json())
}

export const getUserTweets = async ({ authToken }) => {
  return await fetch(`${config.serverUrl}/timeline`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken })
  }).then(r => r.json())
}

export const getTimelineTweets = async params => {
  return await fetch(`${config.serverUrl}/home`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken: params.authToken })
  }).then(r => r.json())
}

export const getUserInfo = async authToken => {
  return await fetch(`${config.serverUrl}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken })
  }).then(r => r.json())
}
