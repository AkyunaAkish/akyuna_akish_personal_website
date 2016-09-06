import React, { Component } from 'react'
import { sendEmail } from '../actions/index'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'
import { Paper, TextField, RaisedButton, FontIcon, Snackbar } from 'material-ui'
import * as actions from '../actions'

class Contact extends Component {
  onSubmit(formData) {
    this.props.sendEmail(formData)
    .then((res) => {
      if(res.error) {
        alert('Message Could Not Be Sent', err)
      } else {
        this.props.toggleSnackBar(true)
      }
    })
    .catch((err) => {
      alert('Message Could Not Be Sent', err)
    })
  }

  handleSnackBarClose() {
    this.props.toggleSnackBar(false)
  }

  render() {
    const { fields: { name, email, message }, handleSubmit } = this.props
    const inputTextStyle = {
      color: 'white'
    }

    return (
      <div>
        <Paper className='paperForm' zDepth={5}>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h1><span className='fa fa-pencil'></span> Contact Akyuna</h1>
            <div>
              <TextField
                className='contactInput'
                hintText='Your Name'
                hintStyle={inputTextStyle}
                floatingLabelStyle={inputTextStyle}
                inputStyle={inputTextStyle}
                floatingLabelText='Your Name'
                errorText={name.touched ? name.error : null}
                {...name}
                />
            </div>
            <div>
              <TextField
                className='contactInput'
                hintText='Your Email'
                hintStyle={inputTextStyle}
                floatingLabelStyle={inputTextStyle}
                inputStyle={inputTextStyle}
                floatingLabelText='Your Email'
                errorText={email.touched ? email.error : null}
                {...email}
                />
            </div>
            <div>
              <TextField
                className='contactInput'
                hintText='Your Message'
                hintStyle={inputTextStyle}
                floatingLabelStyle={inputTextStyle}
                textareaStyle={inputTextStyle}
                floatingLabelText='Your Message'
                multiLine={true}
                rows={3}
                rowsMax={6}
                errorText={message.touched ? message.error : null}
                {...message}
                />
            </div>
            <RaisedButton
              type='submit'
              label='Send Message'
              className='sendMessageButton'
              icon={<FontIcon className='fa fa-envelope sendMessageEnvelope' />}
              />
          </form>
        </Paper>

        <Snackbar
          open={this.props.showSnackBar}
          message="Message Sent Successfully"
          autoHideDuration={6000}
          onRequestClose={this.handleSnackBarClose.bind(this)}
          />
      </div>
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.name) errors.name = 'Please enter your name'
  if (!values.email) errors.email = 'Please enter your email address'
  if (!values.message) errors.message = 'Please enter a message'
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!re.test(values.email) && values.email) errors.email = 'Please enter a valid email address'
  return errors
}

function mapStateToProps(state) {
  return {
    showSnackBar: state.material_ui.showSnackBar
  }
}

export default reduxForm({
  form: 'Contact',
  fields: ['name', 'email', 'message'],
  validate: validate
}, mapStateToProps, actions)(Contact)
