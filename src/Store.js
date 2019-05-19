import React, { useMemo, useContext, createContext } from "react"
import { useImmer } from "use-immer"

function makeStore() {
  const Context = createContext()

  const useStore = () => useContext(Context)

  const Provider = ({ children }) => {
    const [state, setState] = useImmer({
      authToken: null,
      tweets: [],
      favorites: [],
      userTweets: [],
      user: {}
    })

    const contextValue = {
      state,
      setState
    }

    return <Context.Provider value={contextValue}>{children}</Context.Provider>
  }

  return {
    Provider,
    useStore
  }
}

export default makeStore()
