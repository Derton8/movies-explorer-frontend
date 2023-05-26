import { useCallback, useEffect, useMemo, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import Preloader from '../Preloader/Preloader';
import './Movies.scss';

export default function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [filterString, setFilterString] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [page, setPage] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [preloaderStyle, setPreloaderStyle] = useState('none');

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setMovies(JSON.parse(localStorage.getItem('movies')));
    const savedSearch = localStorage.getItem('search');
    const savedIsShort = localStorage.getItem('isShort');
    if (savedSearch) {
      setShowCards(true);
      setShowPreloader(false);
      setFilterString(savedSearch);
    }

    if (savedIsShort) {
      setIsShort(savedIsShort === 'true');
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {}, []);

  const handleSubmit = useCallback(async (search) => {
    if (!localStorage.getItem('movies')) {
      setPreloaderStyle('block');
      await moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies));
          setShowCards(true);
          setShowPreloader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setMovies(JSON.parse(localStorage.getItem('movies')));
    localStorage.setItem('search', search);
    setFilterString(search);
  }, []);

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
  }, [screenWidth]);

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSubmit}
        setIsShort={setIsShort}
        isShort={isShort}
      ></SearchForm>
      {showPreloader && <Preloader preloaderStyle={preloaderStyle} />}
      {showCards === true && (
        <MoviesCardList
          more={filteredMovies > moviesToRender}
          movies={moviesToRender}
          onClickMore={handleMoreClick}
          notFound={filteredMovies.length === 0}
          handleMovieLike={props.handleMovieLike}
          savedCards={props.savedCards}
        ></MoviesCardList>
      )}
    </main>
  );
}
