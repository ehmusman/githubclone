import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUser(this.state.text)
        this.setState({ text: '' })
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { text } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-md-8 from-group">
                        <input type="text" className='form-control form-control-lg'
                            placeholder='Enter Username...'
                            name='text'
                            value={text}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-4 form-group">
                        <input type="submit" value="Submit" className='btn btn-danger btn-block btn-lg' />
                    </div>
                </div>
            </form>
        )
    }
}

Search.propTypes = {
    searchUser: PropTypes.func.isRequired
}
export default Search
