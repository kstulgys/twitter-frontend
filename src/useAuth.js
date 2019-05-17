import { useEffect } from "react"
import store from "./Store"

export default function useAuth() {
  const { state, setState } = store.useStore()

  useEffect(() => {
    const tokenFromStorage = window.localStorage.getItem("authToken") || null
    const tokenFromURL = new URL(document.location).searchParams.get("token")

    if (tokenFromStorage) {
      setState(state => {
        state.authToken = JSON.parse(tokenFromStorage)
      })
      return
    }

    if (tokenFromURL) {
      window.history.pushState(null, null, "/")
      localStorage.setItem("authToken", JSON.stringify(tokenFromURL))
      setState(state => {
        state.authToken = tokenFromURL
      })
    }
  }, [state.authToken])
}
