import React, {Component, Fragment }from 'react';

class ReposList extends Component {
    render () {
        return (
            this.props.repos.map(repo => (
                <Fragment>
                    <h1>{repo.name}</h1>
                    <img src={repo.owner.avatar_url}/>
                </Fragment>
                ))
        )
    }
}

export default ReposList;