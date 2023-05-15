import './Movies.scss';
import SearchForm from './SearchForm/SearchForm';

export default function Movies(props) {
  return (
    <main className='movies'>
      <SearchForm></SearchForm>
    </main>
  );
}
