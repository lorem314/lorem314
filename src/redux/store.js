import { combineReducers, createStore } from "redux"
import { theme } from "./reducer"

const store = createStore(combineReducers({ theme }), {
  theme: "light",
})

export default store
