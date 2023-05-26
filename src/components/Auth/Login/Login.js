import { Link, NavLink } from 'react-router-dom';

import '../../Auth/Auth.scss';
import { useFormWithValidation } from '../../Form/Form';

export default function Login(props) {
  const { onSubmit } = props;
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email: values.email, password: values.password });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <NavLink className='form__logo' to='/'></NavLink>
      <h1 className='form__title'>Рады видеть!</h1>
      <h2 className='form__input-title'>E-mail</h2>
      <input
        className='form__input'
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
      <span className='form__error form-error-email'>{errors.email}</span>
      <h2 className='form__input-title'>Пароль</h2>
      <input
        className='form__input'
        value={values.password || ''}
        onChange={handleChange}
        type='password'
        name='password'
        placeholder='Пароль'
        required
      />
      <span className='form__error form-error-password'>{errors.password}</span>
      <button
        className='form__sub-btn form__sub-btn_place_login'
        type='submit'
        disabled={!isValid}
      >
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
