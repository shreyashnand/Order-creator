import React, {Component} from "react";
import { Input } from "semantic-ui-react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () =>
      this.globalSearch()
    );
  };
  
  globalSearch = () => {
    let { searchInput } = this.state;
    let filteredData = this.props.data.filter(value => {
      return (
        value.orderId.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.dop
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    this.props.handleSetData(filteredData);
  };

  render() {
    return (
      <>
        <Input
          placeholder="order id or date of purchase"
          className="inp-mod"
          size="large"
          name="searchInput"
          value={this.state.searchInput || ""}
          onChange={this.handleChange}
          label="Previous Orders"
        />
        <br />
        <br />
      </>
    );
  }
}
