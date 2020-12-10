import React, { Component } from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }
  searchUser = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false });
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }
  setAlert = (type, msg) => {
    this.setState({ alert: { type: type, msg: msg } })
    setTimeout(() => this.setState({ alert: null }), 5000)
  }
  clearAlert = (msg) => {
    if (msg === 'clear') {
      this.setState({ alert: null })
    }
  }
  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert
              alert={this.state.alert}
              clearAlert={this.clearAlert}
            />
            <Switch>
              <Route exact path='/' render={props =>
                <React.Fragment>
                  <Search
                    searchUser={this.searchUser}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users users={users} loading={loading} />
                </React.Fragment>
              } />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props =>
                <User />
              } />
            </Switch>

          </div>
        </div>
      </Router>
    )
  }
}
export default App;