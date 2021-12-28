import { Component } from "react";
import { nanoid } from "nanoid";
class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  inputReader = (evt) => this.setState({ [evt.target.name]: evt.target.value });

  generateContact = (name, number) => {
    return { name, number, id: nanoid(4) };
  };

  contactsAdder = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = this.generateContact(name, number);
    this.props.onSubmit(newContact);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.contactsAdder}>
        <label htmlFor={name}>
          <input
            value={name}
            type="text"
            autoComplete="off"
            placeholder="Ann Ferdinand"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputReader}
          />
        </label>

        <label htmlFor={number}>
          <input
            value={number}
            onChange={this.inputReader}
            type="tel"
            autoComplete="off"
            placeholder="+3805098765432"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
