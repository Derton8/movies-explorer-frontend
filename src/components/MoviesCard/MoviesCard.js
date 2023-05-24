import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.scss';

export default function MoviesCard(props) {
  const { movie } = props;
  const [duration, setDuratiion] = useState('');
  const location = useLocation();

  useEffect(() => {
    timeDuration();
  }, []);
  const handleIconClick = (e) => {
    if (location.pathname === '/movies') {
      e.target.classList.toggle('movie__btn-like_active');
    } else {
      console.log('Удалить');
    }
  };

  function timeDuration() {
    let h = Math.floor(movie.duration / 60) + 'ч';
    if (Math.floor(movie.duration / 60) === 0) {
      h = '';
    }
    let m = (movie.duration % 60) + 'м';
    setDuratiion(`${h} ${m}`);
  }

  return (
    <li>
      <div className='movie'>
        <div className='movie__container'>
          <div className='movie__column'>
            <h2 className='movie__title'>{movie.nameRU}</h2>
            <p className='movie__duration'>{duration}</p>
          </div>
          <button
            className={
              location.pathname === '/movies'
                ? 'movie__btn-like'
                : 'movie__btn-delete'
            }
            type='button'
            onClick={handleIconClick}
          ></button>
        </div>
        <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
          <img
            className='movie__img'
            alt={movie.nameRU}
            src={'https://api.nomoreparties.co' + movie.image.url}
          />
        </a>
      </div>
    </li>
  );
}
