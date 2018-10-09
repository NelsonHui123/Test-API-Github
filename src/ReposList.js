import React, {Component, Fragment }from 'react';

class ReposList extends Component {
    render () {
        return (
            this.props.repos.map(repo => (
                <Fragment>
                    <h1>{repo.name}</h1>
                    <img src={repo.owner.avatar_url}/>
                    {Object.entries(repo.language_stat).map(([key, value]) => (
                        <div>{key} : {value}</div>
                    ))}
                </Fragment>
                ))
        )
    }
}

export default ReposList;