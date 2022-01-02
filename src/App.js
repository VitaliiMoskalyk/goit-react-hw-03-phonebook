import { Component } from "react";
import Form from './components/Form';
import Filter from './components/Filter';
import ContactItem from './components/Contacts';
import ContactList from "./components/Contacts/ContactList";
import toast, { Toaster } from 'react-hot-toast';


class App extends Component {
  state = {
  contacts: [],
  filter: '',
  }
  
  componentDidUpdate(prevState) {
    prevState.contacts !== this.state.contacts && localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}

  componentDidMount() {
    const contacts=localStorage.getItem('contacts')
    const parseContacts=JSON.parse(contacts)
    parseContacts!==null&&this.setState({contacts:parseContacts})
  }
  
  onSubmitForm = data => {
    const normolizeData = data.name.toLowerCase();    
    this.state.contacts.find((contact) => contact.name.toLowerCase() === normolizeData)
      ? toast.error(`${data.name} is already in contacts`)
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
    toast(<span>Confirm delete your contact <button type="button" onClick={
      () => this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }))}>yes</button></span>,{
  id: 'clipboard',
})
    
  };

  
  render() {
    
    const visibleSearch = this.findForFilter();

    return <>
      <Toaster/>
      <h1>Phonebook</h1>
      <Form onSubmit={this.onSubmitForm}/>
      <Filter state={this.state.filter} onChange={this.filterChanger}/>
      <ContactList>
        <ContactItem data={visibleSearch} deleteFunction={this.deleteContacts} />
      </ContactList>
      </>
  }
}

export default App;
