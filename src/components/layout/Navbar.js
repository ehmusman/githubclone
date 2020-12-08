import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
            <div className='container'>
                <a href="/" className="navbar-brand">
                    <i className={icon}> </i>
                    {title}
                </a>
            </div>
        </nav>
    )
}


Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar
