import React from 'react';

const Movies = ({ movies }) => {
    return(
        <div className="row mt-5 text-center">
          {movies.map((movies) => (
          
              <div class="text-center m-auto" style={{width: 200}}>
                <a href={'/filme-info?id=' + movies.id}>
                  <img src={'https://image.tmdb.org/t/p/original' + movies.poster_path} alt="imagem-filme" width="190" height="278" style={{borderRadius: 8}}></img>
                <h5 class="card-title">{movies.title}</h5>
                </a>
              </div>
        
          ))}
        </div>
    )
};

export default Movies