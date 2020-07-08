import React, { Component } from 'react';
import HeaderContainer from "./components/HeaderContainer";
import Search from "./components/Search";
import Table from "./components/Table";
import API from "./utils/API";

class App extends Component {
  state = {
    results: []
  }
  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <HeaderContainer />
        <Search />
        <Table results={this.state.results} />
      </div >
    );
  }

}

export default App;
