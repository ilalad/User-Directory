import React, { Component } from 'react';
import HeaderContainer from "./components/HeaderContainer";
import Search from "./components/Search";
import Table from "./components/Table";
// import Row from "./components/Row";
// import Col from "./components/Col";
import API from "./utils/API";

class App extends Component {
  state = {
    search: "",
    results: [],
    filter: []
  }
  componentDidMount() {
    API.getUsers()
      .then(res => {
        console.log(res.data.results); this.setState({
          results: res.data.results,
          filter: res.data.results
        })
      })
      .catch(err => console.log(err));
  }
  sortByName = () => {
    const newResults = this.state.filter;
    if (this.state.order === "ascending") {
      const sortList = newResults.sort((a, b) => (a.name.first) ? -1 : 1)

      this.setState({
        filter: sortList,
        order: "ascending"
      })
    } else {
      const sortList = newResults.sort((a, b) => (a.name.first) ? 1 : -1)

      this.setState({
        filter: sortList,
        order: "descending"
      })

    }
  }

  handleInputChange = event => {
    const results = this.state.results;
    const input = event.target.value;
    const filter = results.filter(employee => employee.name.first.toLowerCase().indexOf(input.toLowerCase()) > -1
    )
    this.setState({
      filter,
      search: input
    });
  };
  userSearch = () => {
    API.getUsers()
      .then(res => this.setState({
        filter: res.data.results,
        results: res.data.results
      }))
  }

  // When the form is submitted, search the user API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };
  render() {
    return (

      <div>
        <HeaderContainer />
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Table
          results={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
