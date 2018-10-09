import React, { Component } from 'react';
import './App.css';
import ReposList from './ReposList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      languages: []
    }
  }
  componentWillMount = () => {
    this.getRepos()
  }

  getRepos = () => {
    fetch ('https://api.github.com/users/NelsonHui123/repos')
      .then(result => result.json())
      .then(data => {
        this.setState({
          repos: data
        })
        return data;
      })
      .then(data => data.map(x=> {
        fetch(x.languages_url)
        .then(result => result.json())
        .then(data => {
          this.setState({
            languages: this.state.languages.concat(data)
          })
        })
      }))
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.repos.length !== 0) && <ReposList repos={this.state.repos}/>
        }
        {console.table(this.state.languages)}
      </div>
    );
  }
}

export default App;
