import axios from 'axios'
import { HOST } from '../helpers/constants'

import {
  TOGGLE_TABS,
  TOGGLE_SIDE_NAV,
  SET_CURRENT_TAB,
  SEND_EMAIL,
  SET_PROJECT_COLS,
  TOGGLE_SNACKBAR
} from './types'

export function sendEmail(email) {
  const request = axios.post(`${HOST}/sendEmail`, email)

  return {
    type: SEND_EMAIL,
    payload: request
  }
}

export function toggleTabs(bool) {
  return {
    type: TOGGLE_TABS,
    payload: bool
  }
}

export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}

export function toggleSideNav(bool) {
  return {
    type: TOGGLE_SIDE_NAV,
    payload: bool
  }
}

export function toggleSnackBar(bool) {
  return {
    type: TOGGLE_SNACKBAR,
    payload: bool
  }
}

export function setProjectCols(cols) {
  return {
    type: SET_PROJECT_COLS,
    payload: cols
  }
}
