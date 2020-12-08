import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className='card text-center p-2 col-3 m-3'>
            <img
                src={avatar_url}
                alt=""
                style={{ width: '60px', margin: '0 auto' }}
                className='round-img'
            />
            <h5>{login}</h5>
            <div>
                <a
                    href={html_url}
                    className="btn btn-dark btn-sm py-2"
                    target='_blank'
                    rel="noopener noreferrer"
                >more</a></div>
        </div>
    )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem
