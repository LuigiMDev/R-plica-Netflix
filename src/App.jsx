import { useState, useEffect } from 'react';
import './App.css';
import Tmdb from './Tmdb.js';
import MovieRow from './components/movierow.jsx';
import FeaturedMovie from './components/FeaturedMovie.jsx';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import Intro from './components/Intro.jsx';
import Selection from './components/Selection.jsx';

function App() {
  
  const [movieList, setMovieList] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [headerBackground, setHeaderBackground] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [perfil, setPerfil] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer)
  }, [])

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setHeaderBackground(true);
      }
      else {
        setHeaderBackground(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])


  return (
    <div className="app">
      <Intro showIntro={showIntro}/>
      
      {!perfil ? <Selection setPerfil={setPerfil} /> :
      <>
        <section>
          <Header perfil={perfil} headerBackground={headerBackground} />
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
        <section>
          <Footer />
        </section>
        

        {movieList <= 0 && <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando..." />
        </div>}
      
      </>
    }
      </div>
  )
}

export default App
