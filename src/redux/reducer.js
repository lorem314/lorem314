import C from "./type"

export const theme = (state = "light", action) => {
  switch (action.type) {
    case C.CHANGE_THEME:
      return action.theme
    default:
      return state
  }
}
