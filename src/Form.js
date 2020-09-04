import React, { Component } from 'react';
import './Form.css';
import Modal from './modal/Modal';

class Form extends Component {
    render() {
        return (
      <div id="Form">
        <div class="main">
         <h3>Create Orders</h3> 
         <Modal />
        <form onSubmit={this.props.handleFormSubmit}>
        <div>
          <label htmlFor="orderId">Order ID*</label>
          <input id="orderId" value={this.props.neworderId} type="text" maxlength="10" minlength="4" name="orderId" placeholder="XXXXXXXXXX" onChange={this.props.handleInputChange} required />
        </div> 
        <div>
          <label htmlFor="apiKey">API Key:</label>
          <input id="apiKey" value={this.props.newapiKey} type="number" name="apiKey" placeholder="1234" onChange={this.props.handleInputChange} required />
        </div>
        <div> 
          <label htmlFor="distName"> Distributor Name:</label>
          <input id="distName" value={this.props.newdistName} type="text" name="distName" placeholder="Name" onChange={this.props.handleInputChange} required />
        </div>
        <div>  
          <label htmlFor="panNum">PAN Number:</label>
          <input id="panNum" value={this.props.newpanNum} type="text" maxlength="10" minlength="10" placeholder="0000000000" name="panNum" onChange={this.props.handleInputChange} required />
        </div>
        <div>  
          <label htmlFor="doP">Date of Purchase:</label>
          <input id="doP" value={this.props.newdoP} type="date" placeholder="00/00/0000" name="doP" onChange={this.props.handleInputChange} required />
        </div>
        <div>  
          <label htmlFor="details">Additional Details:</label>
          <input id="details" value={this.props.newdetails} type="text" placeholder="How to pay/Where to send checks" name="details" onChange={this.props.handleInputChange} required />
        </div>
          <button id="btn-submit" type="submit" value="Submit">Submit</button>
        </form>
    </div>
      </div>
    );
    }
}

export default Form
