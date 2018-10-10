import React, {Component, Fragment }from 'react';

class ReposList extends Component {
    render () {
        return (
            this.props.repos.map(repo => {
                let langArr = [];
                let sumCarac = 0;
                return (
                <Fragment>
                    <h1>{repo.name}</h1>
                    <img src={repo.owner.avatar_url}/>
                    {
                        Object.entries(repo.language_stat).map(([key, value]) => {
                        sumCarac += value;
                        langArr.push([key, value])
                    })}

                    {console.table(langArr)}
                    {console.log(sumCarac)}

                    {
                        langArr.map(lanSingleArr => {
                            return(
                                <div>{lanSingleArr[0]} : {Math.round((lanSingleArr[1] / sumCarac)*100)} % </div>
                            )
                        })
                    }

                </Fragment>
            )})
        )
    }
}

export default ReposList;