import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

function ComponentB(state) {
  const [connected, setConnected] = useState(state);
  return (
    <div>
      <h3> {connected === false ? 'Contact in Line' : 'Contact off Line'}</h3>
      <button onClick={() => setConnected(!connected)}>{connected === false ? 'Connected' : 'Disconnected'}</button>
      </div>
  );
}

ComponentB.propTypes = {
  state: PropTypes.bool,
};

export default ComponentB;