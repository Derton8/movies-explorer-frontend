import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../Form/Form';
import './Profile.scss';

export default function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { onClick, onUpdateUser } = props;
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    resetForm,
  } = useFormWithValidation();

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, email: currentUser.email });
    setIsValid(false);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: values.name, email: values.email });
  }

  return (
    <main className='profile'>
      <form className='form-profile' onSubmit={handleSubmit}>
        <div>
          <h1 className='form-profile__title'>{`Привет, ${
            currentUser.name || ''
          }!`}</h1>
          <div className='form-profile__row'>
            <p className='form-profile__row-name'>Имя</p>
            <input
              className='form-profile__input'
              type='text'
              name='name'
              value={values.name || ''}
              onChange={handleChange}
              placeholder='Имя'
              minLength='2'
              maxLength='30'
              pattern='[a-zа-яA-ZА-ЯёЁ\-\s]+'
              required
            />
          </div>
          <span className='form-profile__error form-error-name'>
            {errors.name}
          </span>
          <div className='form-profile__row'>
            <p className='form-profile__row-name'>E-mail</p>
            <input
              className='form-profile__input'
              type='email'
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              placeholder='email@mail.com'
              minLength='2'
              maxLength='40'
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              required
            />
          </div>
          <span className='form-profile__error form-error-email'>
            {errors.email}
          </span>
        </div>
        <button
          className='form-profile__sub-btn'
          type='submit'
          disabled={!isValid}
        >
          Редактировать
        </button>
      </form>
      <NavLink className='profile__link' to='/' onClick={onClick}>
        Выйти из аккаунта
      </NavLink>
    </main>
  );
}
