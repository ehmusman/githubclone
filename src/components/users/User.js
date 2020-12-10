import React, { Component } from 'react'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const { login, avatar_url, html_url, name, company, blog, location, bio, public_repos, public_gists, followers, following } = this.props.user;
        // id, followers_url, following_url, organizations_url, repos_url,, created_at, updated_atemail
        return (
            <div className='row'>
                <div className="col-md-6 card text-center">
                    <img src={avatar_url} alt="avatar" className="card-img-top rounded-circle"
                        style={{ width: '40%', margin: '0 auto' }} />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <div className="card-body">
                            <strong>Location : </strong> {location}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 card">
                    <div className="card-body">
                        <h3 className='card-title'>Bio</h3>
                        {bio} <br />
                        <a href={html_url} className='btn btn-dark my-3'>Visit Github Profile</a>
                        <br />
                        <strong>username:</strong> {login} <br />
                        <strong>company: </strong>{company} <br />
                        <strong>Website: </strong>{blog} <br />
                    </div>
                </div>
                <div className="col-md-12">
                    <span className="badge badge-success" style={{ width: '25%', fontSize: '1.3rem' }}> Followers: {followers}</span>
                    <span className="badge  badge-danger" style={{ width: '25%', fontSize: '1.3rem' }}> Following: {following}</span>
                    <span className="badge  badge-dark" style={{ width: '25%', fontSize: '1.3rem' }}> Public Repos:: {public_repos}</span>
                    <span className="badge  badge-light" style={{ width: '25%', fontSize: '1.3rem' }}> Public Gists:: {public_gists}</span>
                </div>
            </div>

        )
    }
}

export default User
