import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'
import ComponentB from './componentB'

const ComponentA = ({ contact }) => {
  return (
    <div>
      <h2>Name: { contact.name }</h2>
      <h3>lastName: { contact.lastName }</h3>
      <h4>email: { contact.email }</h4>
      <ComponentB state={true} />
    </div>
  )
}

ComponentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
}

export default ComponentA;
