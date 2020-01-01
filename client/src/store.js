import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import messageReducer from './reducers/messageReducer'
import socketReducer from './reducers/socketReducer'

const reducer = combineReducers({
	messages: messageReducer,
	socket: socketReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store