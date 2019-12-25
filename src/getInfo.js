import React, { Component } from 'react';
import MovieInfo from './components/movieInfo'

class getInfo extends Component {

    state = {
      movieDetail: []
    }

    componentDidMount(){
        console.log()
        var movieId = window.location.search.split('=')[1];
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=10ac6b308154d8d3da2368d25caa4778&language=pt-BR`)
        .then(res => res.json())
        .then((data) => {
          var movieInformation = data;
          console.log(movieInformation)
          this.setState({movieDetail: movieInformation})
          console.log("Badah", this.state.movieDetail)
        })
        .catch(console.log)
      }
 render(){ 
  return (
    <MovieInfo movieDetail={this.state.movieDetail}/>
  )
}
}

export default getInfo;