import React, { Component } from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  searchUser = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false });
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    )
  }
}
export default App;