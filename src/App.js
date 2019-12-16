import React, { Component } from 'react';
import Movies from './components/movies';

class App extends Component {

  state = {
    movies: []
  }
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=10ac6b308154d8d3da2368d25caa4778&language=pt-BR')
    .then(res => res.json())
    .then((data) => {
      var movieList = data.results;
      console.log(movieList)
      this.setState({movies: movieList})
      console.log(data)
    })
    .catch(console.log)
  }

  render() {
    return (
      <Movies movies={this.state.movies}/>
    );
  }
}

export default App;