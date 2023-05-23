import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.scss';

export default function Profile(props) {
  const { onClick, onUpdateUser } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const currentUser = useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name ?? '');
    setEmail(currentUser.email ?? '');
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: name, email: email });
  }

  return (
    <main className='profile'>
      <form className='form-profile' name={name} onSubmit={handleSubmit}>
        <div>
          <h1 className='form-profile__title'>{`Привет, ${name}!`}</h1>
          <div className='form-profile__row'>
            <p className='form-profile__row-name'>Имя</p>
            <input
              className='form-profile__input'
              type='text'
              name='name'
              value={name}
              onChange={handleChangeName}
              placeholder='Имя'
              minLength='2'
              maxLength='20'
              required
            />
          </div>
          <div className='form-profile__row'>
            <p className='form-profile__row-name'>E-mail</p>
            <input
              className='form-profile__input'
              type='email'
              name='email'
              value={email}
              onChange={handleChangeEmail}
              placeholder='E-mail'
              minLength='2'
              maxLength='40'
              required
            />
          </div>
        </div>
        <button className='form-profile__sub-btn' type='submit'>
          Редактировать
        </button>
      </form>
      <NavLink className='profile__link' to='/' onClick={onClick}>
        Выйти из аккаунта
      </NavLink>
    </main>
  );
}
