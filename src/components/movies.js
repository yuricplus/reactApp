import React from 'react';

const Movies = ({ movies}) => {
    return(
        <div className="row mt-5">
          {movies.map((contact) => (
          
              <div class="text-center" style={{width: 200, margin: 10}}>
                  <img src={'https://image.tmdb.org/t/p/original' + contact.poster_path} width="190" height="278" style={{borderRadius: 8}}></img>
                <h5 class="card-title">{contact.title}</h5>
              </div>
        
          ))}
        </div>
    )
};

export default Movies