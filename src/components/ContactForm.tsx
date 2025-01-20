import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Action, Contact } from "../reducer/contactsReducer";

interface ContactFormProps {
  dispatch: React.Dispatch<Action>;
  dataToEdit: Contact | undefined;
  toggleModal: () => void;
}

const ContactForm: FC<ContactFormProps> = ({
  dispatch,
  dataToEdit,
  toggleModal,
}) => {
  const [contact, setContact] = useState({
    firstName: dataToEdit?.firstName ? dataToEdit.firstName : "",
    lastName: dataToEdit?.lastName ? dataToEdit.lastName : "",
    phone: dataToEdit?.phone ? dataToEdit.phone : "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dataToEdit) {
      dispatch({
        type: "ADD_CONTACT",
        payload: {
          id: Date.now(), //returns current timestamp
          ...contact,
        },
      });
    } else {
      // dispatch edit contact action
      toggleModal();
    }
  };
  return (
    <Form onSubmit={handleOnSubmit} className="contact-form">
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className="firstName"
          name="firstName"
          value={contact.firstName}
          type="text"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className="lastName"
          name="lastName"
          value={contact.lastName}
          type="text"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          className="phone"
          name="phone"
          value={contact.phone}
          type="number"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="submit">
        <Button variant="primary" type="submit" className="submit-btn">
          {dataToEdit ? "Update Contact" : "Add Contact"}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
