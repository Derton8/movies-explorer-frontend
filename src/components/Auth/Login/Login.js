import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../Auth/Auth.scss';

export default function Login(props) {
  const { onSubmit } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <NavLink className='form__logo' to='/'></NavLink>
      <h1 className='form__title'>Рады видеть!</h1>
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
      <span className='form__error form-error-password'></span>
      <button className='form__sub-btn form__sub-btn_place_login' type='submit'>
        Войти
      </button>
      <p className='form__caption'>
        Ещё не зарегистрированы?
        <Link to='/signup' className='form__link'>
          Регистрация
        </Link>
      </p>
    </form>
  );
}
