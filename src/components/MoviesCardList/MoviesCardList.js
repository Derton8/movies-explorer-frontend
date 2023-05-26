import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

export default function MoviesCardList(props) {
  const {
    more,
    movies,
    onClickMore,
    notFound,
    handleMovieLike,
    savedCards,
    savedMovies,
    handleMovieDelete,
    filteredMovies,
  } = props;
  const location = useLocation();

  return (
    <>
      {location.pathname === '/movies' ? (
        <section className='cards'>
          <ul className='cards__list'>
            {movies.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.id}
                handleMovieLike={handleMovieLike}
                savedCards={savedCards}
              ></MoviesCard>
            ))}
          </ul>
          <div className='cards__container'>
            {more && (
              <button
                className='cards__btn'
                type='button'
                onClick={onClickMore}
              >
                Ещё
              </button>
            )}
            {notFound && (
              <p className='cards__notfound'>Ничего не найдено :с</p>
            )}
          </div>
        </section>
      ) : (
        <section className='cards'>
          <ul className='cards__list'>
            {filteredMovies === ''
              ? savedMovies.map((card) => (
                  <MoviesCard
                    movie={card}
                    key={card._id}
                    onDelete={handleMovieDelete}
                  ></MoviesCard>
                ))
              : filteredMovies.map((card) => (
                  <MoviesCard
                    movie={card}
                    key={card._id}
                    onDelete={handleMovieDelete}
                  ></MoviesCard>
                ))}
          </ul>
          <div className='cards__container'>
            {notFound && (
              <p className='cards__notfound'>Ничего не найдено :с</p>
            )}
          </div>
        </section>
      )}
    </>
  );
}
