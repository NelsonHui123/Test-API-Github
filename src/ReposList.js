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

                    <div>
                        {
                            langArr.map(lanSingleArr => {
                                return(
                                    <span style={{width: (lanSingleArr[1] / sumCarac)*100 + '%', height: 5, background:'red', display: 'inline-block'}}></span>
                                )
                            })
                        }
                    </div>

                </Fragment>
            )})
        )
    }
}

export default ReposList;