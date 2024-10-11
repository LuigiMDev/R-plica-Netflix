import { useState, useEffect } from 'react';
import './App.css';
import Tmdb from './Tmdb.js';
import MovieRow from './components/movierow.jsx';
import FeaturedMovie from './components/FeaturedMovie.jsx';

function App() {
  
  const [movieList, setMovieList] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      let original = list.filter((list) => list.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (original[0].items.results.length - 1));
      let chosen = original[0].items.results[randomChosen];
    
      let info = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatured(info);
    }

    loadAll();
  }, []); 


  return (
    <div className="app">
      <section>
        {featured &&
          <FeaturedMovie item={featured}/>
        }
      </section>
      <section className='lists'>
        {movieList.map((movie, key) =>(
            <div key={key}>
              <MovieRow movie={movie} />
            </div>
            )
          )}
      </section>
    </div>
  )
}

export default App
