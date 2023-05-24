import { useEffect } from 'react';
import { useFormWithValidation } from '../Form/Form';
import './SearchForm.scss';

export default function SearchForm(props) {
  const { onSubmit, setIsShort, isShort } = props;
  const { values, setValues, handleChange } = useFormWithValidation();

  useEffect(() => {
    setValues({ search: localStorage.getItem('search') || '' });
  }, []);

  function handleChangeBox(e) {
    setIsShort(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.search);
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <div className='search__columns'>
        <input
          className='search__input'
          type='text'
          name='search'
          placeholder='Фильм'
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <button className='search__btn' type='submit'>
          Найти
        </button>
      </div>
      <div className='search__container'>
        <label className='search__switch'>
          <input type='checkbox' onChange={handleChangeBox} checked={isShort} />
          <span className='search__slider'></span>
        </label>
        <p className='search__text'>Короткометражки</p>
      </div>
    </form>
  );
}
