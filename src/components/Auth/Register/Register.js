import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../Auth/Auth.scss';

export default function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='form'>
      <NavLink className='form__logo' to='/'></NavLink>
      <h1 className='form__title'>Добро пожаловать!</h1>
      <h2 className='form__input-title'>Имя</h2>
      <input
        className='form__input'
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='name'
        name='name'
        placeholder='Имя'
        minLength='2'
        maxLength='20'
        required
      />
      <span className='form__error form-error-email'></span>
      <h2 className='form__input-title'>E-mail</h2>
      <input
        className='form__input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        name='email'
        placeholder='E-mail'
        minLength='2'
        maxLength='40'
        required
      />
      <span className='form__error form-error-email'></span>
      <h2 className='form__input-title'>Пароль</h2>
      <input
        className='form__input'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        name='password'
        placeholder='Пароль'
        minLength='2'
        maxLength='40'
        required
      />
      <span className='form__error form-error-password'>
        Что-то пошло не так...
      </span>
      <button className='form__sub-btn' type='submit'>
        Зарегистрироваться
      </button>
      <p className='form__caption'>
        Уже зарегистрированы?
        <Link to='/signin' className='form__link'>
          Войти
        </Link>
      </p>
    </form>
  );
}
