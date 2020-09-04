import React, { Component } from 'react'
import './Modal.css';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Search from '../modal/Search';


const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false,
      data: [],
      filteredData: [],
      columns: [],
      searchInput: ""
    }
  }


 componentDidMount() {
    this.getData();
    this.getColumns();
  }

 
 getColumns = () => {
    let columns = [
      {
        Header: "Order ID",
        accessor: "orderId",
        sortable: false,
        show: true,
        displayValue: " Order ID"
      },
      {
        Header: "API KEY",
        accessor: "apiKey",
        sortable: false,
        show: true,
        displayValue: "API KEY "
      },
      {
        Header: "Distributor Name",
        accessor: "distName",
        sortable: false,
        show: true,
        displayValue: " Distributor Name "
      },
      {
        Header: "PAN Number",
        accessor: "panNum",
        sortable: false,
        show: true,
        displayValue: " PAN Number "
      },
      {
        Header: "Date of Purchase",
        accessor: "dop",
        sortable: false,
        show: true,
        displayValue: " Date of Purchase "
      }
    ];
    this.setState({ columns });
  };


getData = () => {
    let data = [
      { orderId: "SKJHDIE123", apiKey: "32", distName: "John Walter", panNum: "2364DJON8D", dop:"02/04/2020" },
      { orderId: "LOJHDIE123", apiKey: "10", distName: "Bill Gates", panNum: "CDFRER1456", dop:"03/06/2020" },
      { orderId: "EKJHDIE123", apiKey: "4", distName: "Will Smith", panNum: "1425CDFER6", dop:"03/05/2020" },
      { orderId: "SKJHDIE565", apiKey: "6", distName: "Max Rude", panNum: "CDFVGRT361", dop:"20/05/2020" },
      { orderId: "LSOMD12W64", apiKey: "7", distName: "Max Will", panNum: "NHJY3614HT", dop:"12/05/2020" },
      { orderId: "EKLOD2645S", apiKey: "36", distName: "Bill John", panNum: "CD14VF25FR", dop:"02/04/2020" },
      { orderId: "SKJHDIE123", apiKey: "14", distName: "Yohan Dave", panNum: "WE9ER5AS65", dop:"05/08/2020" },
      { orderId: "SKJHDIE142", apiKey: "252", distName: "John Thomas", panNum: "ZA36XS25CD", dop:"05/09/2020" },
      { orderId: "SKJHD653F1", apiKey: "231", distName: "Ajay Kumar", panNum: "CD25VF14RE", dop:"22/09/2020" },
      { orderId: "MLFROKCDNJ", apiKey: "12", distName: "Akash Yadav", panNum: "CX23DS5647", dop:"21/09/2020" },
      { orderId: "ML36FR14DW", apiKey: "14", distName: "Meera Singh", panNum: "CDVC65FD23", dop:"20/05/2020" },
      { orderId: "SKJHDIE123", apiKey: "20", distName: "Kulpeed kane", panNum: "12BV23NM56", dop:"12/05/2020" },
      
    ];
    this.setState({ data, filteredData: data });
  };

  handleSetData = data => {
    this.setState({ filteredData: data });
  };

  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    var Modal = [];
    let { filteredData, columns } = this.state;
    Modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
        <Search data={this.state.data} handleSetData={this.handleSetData} />
        <ReactTable data={filteredData} columns={columns} defaultPageSize={5} className="-striped -highlight" /> 
        
      </div>
      </div>
    );
    return (
      <div>
        <a className="btn" onClick={this.toggle}>{this.state.toggle ? 'Close' : 'View Previous Orders'}</a>
        {Modal}
      </div>
    );
  }
}

export default Modal;