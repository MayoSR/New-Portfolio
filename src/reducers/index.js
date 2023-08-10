import { combineReducers } from 'redux'
import appStateReducer from './appStateReducer'
import windowState from './windowController'

export default combineReducers({
    appState: appStateReducer,
    windowState: windowState,
})
