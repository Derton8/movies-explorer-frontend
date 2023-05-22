import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.scss';

export default function SavedMovies(props) {
  return (
    <main className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </main>
  );
}
