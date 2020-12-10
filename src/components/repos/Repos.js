import React from 'react'
import RepoItem from './RepoItem'

function Repos({ repos }) {
    return <div className='card-columns'>
        {repos.map(repo =>
            <RepoItem
                key={repo.id}
                repo={repo}
            />)
        }
    </div>
}

export default Repos
