import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from './Contact'

const ContactConnected = ({contact}) => {
  return (
    <div>
      <h2>Name: { contact.name }</h2>
      <h3>lastName: { contact.lastName }</h3>
      <h4>email: { contact.email }</h4>
      <h5>This contact is: { contact.connected ? 'CONTACT IN LINE' : 'CONTACT OFF LINE' }</h5>
    </div>
  )
}

Contact.propTypes = {
  contact: PropTypes.instanceOf(Contact),
}

export default ContactConnected;
