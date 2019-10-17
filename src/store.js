import { createStore } from 'redux'
import PostReducer from './reducers/PostReducer'

// We are not using combineReducer here because we don't have multiple reducers.
const store = createStore(PostReducer)

export default store
