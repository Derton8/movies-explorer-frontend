import { NavLink } from 'react-router-dom';

import './Header.scss';
import Navigation from './Navigation/Navigation';

export default function Header(props) {
  const { loggedIn } = props;

  return (
    <header
      className='header'
      style={{ backgroundColor: loggedIn && 'transparent' }}
    >
      <NavLink className='header__logo' to='/'></NavLink>
      {loggedIn ? (
        <Navigation></Navigation>
      ) : (
        <nav className='header__nav'>
          <NavLink className='header__link' to='/signup'>
            Регистрация
          </NavLink>
          <NavLink className='header__link' to='/signin'>
            Войти
          </NavLink>
        </nav>
      )}
    </header>
  );
}
