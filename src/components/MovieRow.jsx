import {React, useState} from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({ movie }) => {

  const [scrollX, setScrollX] = useState(0);

  const leftHandleArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const rightHandleArrow = () => {
    console.log('oi')
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listW = 150 * movie.items.results.length;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60 ;
    }
    setScrollX(x);
  }


  return (
    <div className="movieRow">

      <h2>{movie.title}</h2>
      <div className="movieRow__area">
      <div className="movieRow__left" onClick={leftHandleArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}}/>
      </div>
      <div className="movieRow__right" onClick={rightHandleArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
        <div className="movieRow__list" style={{
          marginLeft: scrollX,
          width: 150 * movie.items.results.length
          }}>
          {movie.items.results.length > 0 &&
            movie.items.results.map((movie, key) => (
              <div key={key} className="movieRow__item">
                <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
              />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
