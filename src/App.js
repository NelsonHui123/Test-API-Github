import React, { Component } from 'react';
import './App.css';
import ReposList from './ReposList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
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
      })
  }

  render() {
    return (
      <div className="App">
        {console.table(this.state.repos)}
        {
          (this.state.repos.length !== 0) && <ReposList repos={this.state.repos}/>
        }
      </div>
    );
  }
}

export default App;
