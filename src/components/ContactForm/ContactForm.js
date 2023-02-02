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
};

const handleFirstNameChange = (event) => {
  setFirstName(event.target.value);
};

const handleLastNameChange = (event) => {
  setLastName(event.target.value);
};

const handleAddressChange = (event) => {
  setAddress(event.target.value);
};

const handlePhoneNumberChange = (event) => {
  setPhoneNumber(event.target.value);
};

return (
  <>
  <form onSubmit={handleSubmit}>
    <label htmlFor="firstName"></label>
    <input onChange={handleFirstNameChange} value={firstName} id="first-name" type="text" placeholder="First Name" />
    <label htmlFor="lastName"></label>
    <input onChange={handleLastNameChange} value={lastName} id="last-name" type="text" placeholder="Last Name"/>
    <label htmlFor="adddress"></label>
    <input onChange={handleAddressChange} value={address} id="address" type="text" placeholder="Address"/>
    <label htmlFor="phoneNumber"></label>
    <input onChange={handlePhoneNumberChange} value={phoneNumber} id="phone-number" type="text" placeholder="Phone Number" />
    <button type="submit">Add</button>
  </form>
  <div>
    {contacts.map(contact =>( //mapping contacts and returning each contact with HTML below
      <div className="contact-container" key={contact.id}>
        <div>{contact.firstName}</div>
        <div>{contact.lastName}</div>
        <div>{contact.address}</div>
        <div>{contact.phoneNumber}</div>
      </div>
    ))}
  </div>
  </>
)
}

export default ContactForm;
