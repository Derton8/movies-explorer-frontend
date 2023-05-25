import { useCallback, useMemo, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.scss';

export default function SavedMovies(props) {
  const { savedMovies, handleMovieDelete } = props;
  const [isShort, setIsShort] = useState(false);
  const [filterString, setFilterString] = useState(null);

  const filteredMovies = useMemo(() => {
    if (!filterString) {
      return '';
    }
    const filtered = savedMovies.filter((movie) => {
      const nameRu = movie.nameRU.toLowerCase();
      const nameEn = movie.nameEN.toLowerCase();
      const str = filterString.toLowerCase();
      if (isShort && movie.duration > 40) {
        return false;
      }
      return nameRu.includes(str) || nameEn.includes(str);
    });
    return filtered;
  }, [filterString, savedMovies, isShort]);

  const handleSubmit = useCallback(async (search) => {
    if (!localStorage.getItem('movies')) {
    }
    setFilterString(search);
  }, []);

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSubmit}
        isShort={isShort}
        setIsShort={setIsShort}
      ></SearchForm>
      <MoviesCardList
        savedMovies={savedMovies}
        filteredMovies={filteredMovies}
        handleMovieDelete={handleMovieDelete}
        notFound={filteredMovies.length === 0 && filterString !== null}
      ></MoviesCardList>
    </main>
  );
}
