import { useCallback, useEffect, useMemo, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './Movies.scss';

export default function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(localStorage.getItem('search'));
  const [filterString, setFilterString] = useState(null);
  const [isShort, setIsShort] = useState(false);
  const [page, setPage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
    const savedSearch = localStorage.getItem('search');
    const savedIsShort = localStorage.getItem('isShort');
    if (savedSearch) {
      setSearch(savedSearch);
      setFilterString(savedSearch);
    }

    if (savedIsShort) {
      setIsShort(savedIsShort === 'true');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = useCallback(
    async (search) => {
      if (!localStorage.getItem('movies')) {
        await moviesApi
          .getMovies()
          .then((movies) => {
            localStorage.setItem('movies', JSON.stringify(movies));
          })
          .catch((err) => {
            console.log(err);
          });
      }
      setMovies(JSON.parse(localStorage.getItem('movies')));
      localStorage.setItem('search', search);
      setFilterString(search);
    },
    [search, movies]
  );

  const filteredMovies = useMemo(() => {
    if (!filterString) {
      return [];
    }

    const filtered = movies.filter((movie) => {
      const nameRu = movie.nameRU.toLowerCase();
      const nameEn = movie.nameEN.toLowerCase();
      const str = filterString.toLowerCase();
      if (isShort && movie.duration > 40) {
        return false;
      }
      return nameRu.includes(str) || nameEn.includes(str);
    });

    localStorage.setItem('search', filterString);
    localStorage.setItem('isShort', String(isShort));

    return filtered;
  }, [filterString, movies, isShort]);

  const moviesToRender = useMemo(() => {
    const countToRender = screenWidth < 641 ? 5 : screenWidth < 1280 ? 8 : 12;

    return filteredMovies.slice(0, countToRender + page);
  }, [filteredMovies, page, screenWidth]);

  const handleMoreClick = useCallback(() => {
    const k = screenWidth < 641 ? 2 : screenWidth < 1280 ? 2 : 3;
    setPage((prev) => prev + k);
  }, []);

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSubmit}
        value={search}
        setIsShort={setIsShort}
        isShort={isShort}
      ></SearchForm>
      <MoviesCardList
        more={filteredMovies > moviesToRender}
        movies={moviesToRender}
        onClickMore={handleMoreClick}
      ></MoviesCardList>
    </main>
  );
}
