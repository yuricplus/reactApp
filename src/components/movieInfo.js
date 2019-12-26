import React from 'react';

const MovieInfo= ({ movieDetail}) => {
    return(
        <div className="row mt-5 m-auto text-center">
             <div 
            style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgb(255, 255, 255)), url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
            backgroundSize: 'cover',
            width: '100%',
            height: 400
            }}>
                <section className="movie-detail text-center">
                  <img src={'https://image.tmdb.org/t/p/original' + movieDetail.poster_path} alt="imagem-filme" width="190" height="278" style={{borderRadius: 8, marginTop: 150}}></img>
                  <h5 className="mt-4 bold">{movieDetail.title}</h5>
                  <div className="d-flex center m-auto bold" style={{width: 60, padding:12,backgroundColor: '#1e7e34', textAlign: 'center', color: '#fff',fontWeight: 'bold' }}>{movieDetail.adult === false ? 'Livre' : '+18'}</div>
                </section>
            </div>
    </div>
    )
};

export default MovieInfo