import {
  SET_PROJECT_COLS
} from '../actions/types'

const initialState = {
  projectCols: 3
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT_COLS:
    return { ...state, projectCols: action.payload }
    break
  }
  return { ...state }
}
