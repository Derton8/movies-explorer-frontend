import { NavLink, useLocation } from 'react-router-dom';

import './Header.scss';
import Navigation from './Navigation/Navigation';

export default function Header(props) {
  const { loggedIn } = props;
  const location = useLocation();

  return (
    <header
      className='header'
      style={{
        backgroundColor: location.pathname !== '/' && 'transparent',
        display:
          location.pathname === '/movies' ||
          location.pathname === '/saved-movies' ||
          location.pathname === '/' ||
          location.pathname === '/profile'
            ? 'flex'
            : 'none',
      }}
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
