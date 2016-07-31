import axios from 'axios'

export const SEND_EMAIL = 'SEND_EMAIL'

export function sendEmail(email) {
  const request = axios.post(`/sendEmail`, email)

  return {
    type: SEND_EMAIL,
    payload: request
  }
}
