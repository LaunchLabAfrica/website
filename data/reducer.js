import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

export default function getReducer (client) {
  return combineReducers({
    form: formReducer     
  })
}