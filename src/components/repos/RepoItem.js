import React, { Fragment } from 'react'

function RepoItem({ repo }) {
    return (
        <div className='card'  >
            <h5 className="card-header text-danger">
                {repo.name}
            </h5>
            <div className="card-body text-center">

                <a href={repo.html_url} className="btn btn-dark">Repo URL</a>
            </div>
        </div>
    )
}

export default RepoItem
