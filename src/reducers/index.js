import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import SkillsReducer from './skills_reducer'

const rootReducer = combineReducers({
  skills: SkillsReducer,
  form: formReducer
})

export default rootReducer
