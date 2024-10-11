import React from 'react'
import './FeaturedMovie.css'

const FeaturedMovie = ({item}) => {

  const genres = item.genres.map((genre) => genre.name)
  let firstDate = new Date(item.first_air_date)

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200 ) + '...';
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
    }}>


      <div className="featured__vertical">
        <div className="featured__horizontal">
          <div className="featured__name"><h1>{item.original_name}</h1></div>
          <div className='featured__info'>
            <p className='featured__points'>{item.vote_average.toFixed(1)} pontos</p>
            <p className='featured__year'>{firstDate.getFullYear()}</p>
            <p className='featured__seasons'>{item.number_of_seasons} temporada{item.number_of_seasons > 1 && 's'}</p>
          </div>
          <div className="featured__description">
            <p>{description}</p>
          </div>
          <div className="featured__buttons">
            <a className='featured__watchButton' href={`/watch/${item.id}`}>▶ Assistir</a>
            <a className='featured__myListButton' href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
          <div className="featured__genres">
            <p><strong>Gêneros</strong>: {genres.join(', ')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie