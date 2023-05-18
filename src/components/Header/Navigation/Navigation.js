import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export default function Navigation(props) {
  return (
    <div className='navigation'>
      <nav className='nav'>
        <div className='nav__column'>
          <NavLink className='nav__link' to='/movies'>
            Фильмы
          </NavLink>
          <NavLink className='nav__link' to='/saved-movies'>
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className='nav__column'>
          <NavLink className='nav__link nav__link_type_btn' to='/profile'>
            Аккаунт
            <div className='nav__icon'></div>
          </NavLink>
        </div>
      </nav>
      <input
        className='navigation__toggle'
        id='navigation-toggle'
        type='checkbox'
      />
      <label className='navigation__btn' for='navigation-toggle'>
        <span></span>
      </label>
      <div className='navigation__popup'></div>
      <ul className='navigation__menu'>
        <div>
          <li className='navigation__menu-item'>
            <NavLink className='navigation__link' to='/'>
              Главная
            </NavLink>
          </li>
          <li className='navigation__menu-item'>
            <NavLink className='navigation__link' to='/movies'>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__menu-item'>
            <NavLink className='navigation__link' to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </div>
        <li className='navigation__menu-item'>
          <NavLink
            className='navigation__link navigation__link_type_btn'
            to='/profile'
          >
            Аккаунт
            <div className='nav__icon'></div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
