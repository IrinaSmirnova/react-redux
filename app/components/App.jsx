import React from 'react';
import Header from './Header';
import ContactList from './ContactList';
import {connect} from 'react-redux';
import './App.css';

const menu = [
  {
    'link': '/contacts',
    'label': 'Contacts'
  },
  {
    'link': '/settings',
    'label': 'Settings'
  },
  {
    'link': '/orders',
    'label': 'Orders'
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findHandler = this.findHandler.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
	let input = event.target.querySelector('#emailAdd');
    this.props.handleSubmit(input.value);
	input.value = '';
  }

  findHandler () {
    this.props.findHandler(document.querySelector('#findEmails').value);
  }
 
  render() {
    return (
          <div>
            <Header menuItems={menu}/>
            <ContactList 
				onSubmit={this.handleSubmit} 
				emails={this.props.emails} 
				findHandler={this.findHandler}/>
          </div>
    );
  }
}

export default connect(state => ({
                                  emails: state.emails.filter((email) => email.includes(state.filterEmails))
                                }),
                      dispatch => ({
                                  handleSubmit: (value) => dispatch({type: 'FORM_SUBMIT', payload: value}),
                                  findHandler: (value) => dispatch({type: 'FIND_EMAILS', payload: value})
                      })
                      )(App);

