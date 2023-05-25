import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

export default function MoviesCardList(props) {
  const { more, movies, onClickMore, notFound } = props;
  const location = useLocation();

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {location.pathname === '/movies' &&
          movies.map((movie) => (
            <MoviesCard movie={movie} key={movie.id}></MoviesCard>
          ))}
      </ul>
      <div className='cards__container'>
        {more && (
          <button
            className='cards__btn'
            type='button'
            style={{ display: location.pathname === '/saved-movies' && 'none' }}
            onClick={onClickMore}
          >
            Ещё
          </button>
        )}
        {notFound && <p className='cards__notfound'>Ничего не найдено :с</p>}
      </div>
    </section>
  );
}
