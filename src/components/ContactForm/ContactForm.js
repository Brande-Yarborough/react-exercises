import { useState } from "react";
import { Form } from "react-bootstrap";
import { nanoid } from 'nanoid'

const INITIAL_CONTACT = [
  {
    id: 1,
    firstName: "Brande",
    lastName: "Yarborough",
    address: "100 University Ridge",
    phoneNumber: "867-5309",
  },
];

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState(INITIAL_CONTACT);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      firstName, 
      lastName,
      address,
      phoneNumber,
    };

    addContact(newContact);
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");

    
  }

return (
  <form onSubmit={handleSubmit}>
  <label htmlFor="firstName"></label>
  <input type="text" placeholder="First Name" />
  <label htmlFor="lastName"></label>
  <input type="text" placeholder="Last Name"/>
  <label htmlFor="adddress"></label>
  <input type="text" placeholder="Address"/>
  <label htmlFor="phoneNumber"></label>
  <input type="text" placeholder="Phone Number" />
  <button type="submit">Add</button>
  </form>
)
}

export default ContactForm;
