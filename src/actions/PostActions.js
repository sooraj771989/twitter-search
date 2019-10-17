export const setPosts = (value) => {
  return {
    type: 'SET_POSTS',
    value
  }
}

export const toggleLoading = (value) => {
  return {
    type: 'TOGGLE_LOADING',
    value
  }
}
