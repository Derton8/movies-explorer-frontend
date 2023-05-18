import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Profile.scss';

export default function Movies(props) {
  const [name, setName] = useState('Данил');
  const [email, setEmail] = useState('pochta@yandex.ru');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className='profile'>
      <form className='form' name={name} onSubmit={handleSubmit}>
        <div>
          <h1 className='form__title'>{`Привет, ${name}!`}</h1>
          <div className='form__row'>
            <p className='form__row-name'>Имя</p>
            <input
              className='form__input'
              type='text'
              value={name}
              onChange={handleChangeName}
              placeholder='Имя'
              minLength='2'
              maxLength='20'
              required
            />
          </div>
          <div className='form__row'>
            <p className='form__row-name'>E-mail</p>
            <input
              className='form__input'
              type='text'
              value={email}
              onChange={handleChangeEmail}
              placeholder='E-mail'
              minLength='2'
              maxLength='40'
              required
            />
          </div>
        </div>
        <button className='form__sub-btn' type='submit'>
          Редактировать
        </button>
      </form>
      <NavLink className='profile__link' to='/'>
        Выйти из аккаунта
      </NavLink>
    </main>
  );
}
