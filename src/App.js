import React, { Component } from 'react';
import './App.css';
import ReposList from './ReposList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
    }
  }
  componentWillMount = () => {
    this.getRepos()
  }

  getRepos = () => {
    
    //Premier fetch pour recupérer tout les repos sous forme d'un tableau d'objets
    fetch ('https://api.github.com/users/NelsonHui123/repos')
    
    .then(result => result.json())
    
    //--------------------------------RAJOUT D'UNE CLEE 'language_stat' DANS CHAQUE OBJET DU TABLEAU-------------------------------------------------
    
      //On vient stocker dans une constante l'ensemble des nouveaux fetch (pour recevoir l'ojbet contenant les proportions des languages) sous forme d'un tableau,
      .then(repoArr => {
        const promises = repoArr.map(
          repoSingle => fetch(repoSingle.languages_url)

            .then(result => result.json())
        )

        //Ici on utilise Promise.all pour pouvoir recevoir le resultat de toutes les requètes des API dans le bon ordre (on est obligé de faire ça pour pouvoir lier un repo avec sa proportion des languages correspondante)
        return Promise.all(promises)


        //Ensuite on vient mapper le tableau contenant les proportions de languages (avec le paramètre index dans le map), et on va rajouter la
        // clee 'language_stat' dans chaque repo en utilisant l'idx du tableau de proportion car on sait qu'ils sont dans le même ordre
          .then(languages => languages.map(
            (language, idx) => Object.assign(repoArr[idx], {language_stat: language})
          ))

          //Enfin on balance tout ça dans le state
          .then(repos => this.setState({repos:repos}))


      //on peut aussi utiliser async et await pour écrire du code assynchrone avec la syntaxe du code synchrone
    })
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.repos.length !== 0) && <ReposList repos={this.state.repos}/>
        }
      </div>
    );
  }
}

export default App;
