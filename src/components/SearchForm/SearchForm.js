import './SearchForm.scss';

export default function SearchForm(props) {
  return (
    <form className='search'>
      <div className='search__columns'>
        <input
          className='search__input'
          type='search'
          placeholder='Фильм'
          required
        />
        <button className='search__btn' type='submit'>
          Найти
        </button>
      </div>
      <div className='search__container'>
        <label className='search__switch'>
          <input type='checkbox' required />
          <span className='search__slider'></span>
        </label>
        <p className='search__text'>Короткометражки</p>
      </div>
    </form>
  );
}
