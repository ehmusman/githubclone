import React, { Component } from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users")
    this.setState({ users: res.data, loading: false });

  }
  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users users={users} loading={loading} />
        </div>
      </div>
    )
  }
}
export default App;