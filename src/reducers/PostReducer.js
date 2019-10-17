const INITIAL_STATE = {
  posts: [],
  loading: false
}

const PostReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.value
      }
    case 'TOGGLE_LOADING':
      return {
        ...state,
        loading: action.value
      }
    default:
      return state
  }
}

export default PostReducer
