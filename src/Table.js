import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            {items.map(item => {
              return (
                <div> 
                <tr>
                <th>Order ID</th>
                <th>API keys</th>
                <th>Distributor Name</th>
                <th>Pan Number</th>
                <th>Date of Purchase</th>
                <th>Details</th>
                </tr>
                <tr>
                  <td id="od" >{item.orderId}</td>
                  <td>{item.apiKey}</td>
                  <td>{item.distName}</td>
                  <td id="pn">{item.panNum}</td>
                  <td>{item.doP}</td>
                  <td>{item.details}</td>
                </tr>
                </div>  
              );
            })}
          </tbody>
        </table>
      </div>
    );
    }
}

export default Table
