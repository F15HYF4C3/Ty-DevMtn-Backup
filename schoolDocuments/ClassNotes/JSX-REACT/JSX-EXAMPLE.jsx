import React, { Component } from 'react';
import './App.css';
import MyFirstComponent from './myFirstComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handleChangePassword(e){

  }

  render() {
    console.log(this.state.email)
    return (
      <div className="App">
        <h1>{this.state.email}</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email"/>
        <br/>
        <input type="password" placeholder="Password"/>
        <br/>
        <button>login</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import MyFirstComponent from './myFirstComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
        <br/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
        <br/>
        <button>login</button>
      </div>
    );
  }
}

export default App;