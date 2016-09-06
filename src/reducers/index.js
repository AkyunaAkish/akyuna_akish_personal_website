import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import materialUIReducer from './materialUIReducer'
import portfolioReducer from './portfolioReducer'

const rootReducer = combineReducers({
  form: formReducer,
  material_ui: materialUIReducer,
  portfolio: portfolioReducer
})

export default rootReducer
