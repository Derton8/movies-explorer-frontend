import { Link, NavLink } from 'react-router-dom';

import '../../Auth/Auth.scss';
import { useFormWithValidation } from '../../Form/Form';

export default function Register(props) {
  const { onSubmit } = props;

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <NavLink className='form__logo' to='/'></NavLink>
      <h1 className='form__title'>Добро пожаловать!</h1>
      <h2 className='form__input-title'>Имя</h2>
      <input
        className='form__input'
        value={values.name || ''}
        onChange={handleChange}
        type='name'
        name='name'
        placeholder='Имя'
        minLength='2'
        maxLength='30'
        pattern='[a-zа-яA-ZА-ЯёЁ\-\s]+'
        required
      />
      <span className='form__error form-error-name'>{errors.name}</span>
      <h2 className='form__input-title'>E-mail</h2>
      <input
        className='form__input'
        value={values.email || ''}
        onChange={handleChange}
        type='email'
        name='email'
        placeholder='email@mail.com'
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        maxLength='45'
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
      <button className='form__sub-btn' type='submit' disabled={!isValid}>
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
