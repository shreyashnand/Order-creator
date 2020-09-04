import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orderId: '',
      apiKey:'',
      distName:'',
      panNum:'',
      doP:'',
      details:'',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    let items = [...this.state.items];
    items.push({ details:this.state.details, orderId:this.state.orderId, doP:this.state.doP, apiKey:this.state.apiKey, distName:this.state.distName, panNum:this.state.panNum });
    this.setState({
      orderId:'',
      apiKey:'',
      distName:'',
      panNum:'',
      doP:'',
      details:'',
      items
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    this.setState({
      [name]: value,
     
    })
  };

  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newdetails={this.state.details} newdoP={this.state.doP} neworderId={this.state.orderId} newapiKey={this.state.apiKey} newdistName={this.state.distName} newpanNum={this.state.panNum} />
        <Table items={ this.state.items }/>
      </div>
    );
  }
}

export default App;

