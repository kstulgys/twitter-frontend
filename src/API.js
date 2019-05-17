export const getFavouriteTweets = async ({ authToken, name }) => {
  return await fetch("http://localhost:4000/favorites", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken, name }) // body data type must match "Content-Type" header
  }).then(r => r.json())
}

export const setFavouriteTweet = async ({ authToken, id }) => {
  return await fetch("http://localhost:4000/favorite", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken, id }) // body data type must match "Content-Type" header
  }).then(r => r.json())
}

export const createTweet = async ({ authToken, update }) => {
  return await fetch("http://localhost:4000/update", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken, update }) // body data type must match "Content-Type" header
  }).then(r => r.json())
}

export const searchTweets = async params => {
  return await fetch("http://localhost:4000/search", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken: params.authToken, query: params.query }) // body data type must match "Content-Type" header
  }).then(r => r.json())
}

export const getUserTweets = async ({ authToken }) => {
  return await fetch("http://localhost:4000/timeline", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken }) // body data type must match "Content-Type" header
  }).then(r => r.json())
}

export const getTimelineTweets = async params => {
  return await fetch("http://localhost:4000/home", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken: params.authToken }) // body data type must match "Content-Type" header
  }).then(r => r.json())
}

export const getUserData = async params => {
  return await fetch("http://localhost:4000/user", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ authToken: params.authToken }) // body data type must match "Content-Type" header
  }).then(r => r.json())
}
