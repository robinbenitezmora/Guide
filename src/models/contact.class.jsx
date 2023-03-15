import conection_state from '../../conection-state'

class Contact(props) {
  name: '';
  lastName: '';
  email: '';
  connected: false;

  constructor(name, lastName, email, connected) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.connected = connected
  }
}

export default Contact
