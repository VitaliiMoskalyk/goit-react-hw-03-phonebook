import { Component } from "react/cjs/react.development";
import Form from './components/Form';
import Filter from './components/Filter';
import ContactItem from './components/Contacts';
import ContactList from "./components/Contacts/ContactList";

class App extends Component {
  state = {
  contacts: [],
  filter: '',
  }
  
  onSubmitForm = data => {
    this.state.contacts.find(contact => contact.name.toLowerCase().includes(data.name.toLowerCase())) ?
      alert(`${data.name} is already in contacts `)
      : this.setState((prevState) => ({ contacts: [data, ...prevState.contacts] }));
  }

  findForFilter = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));

  filterChanger = (evt) => {
    const filterValue = evt.currentTarget.value;
    this.setState({ filter: filterValue });
  };

  deleteContacts = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    
    const visibleSearch = this.findForFilter();

    return <>
      <h1>Phonebook</h1>
      <Form onSubmit={this.onSubmitForm}/>
      <Filter state={this.state.filter} onChange={this.filterChanger}/>
    <ContactList><ContactItem data={visibleSearch} deleteFunction={this.deleteContacts}/></ContactList>
      </>
  }
}

export default App;
