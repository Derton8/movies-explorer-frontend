import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export default function Navigation(props) {
  window.addEventListener('resize', handleResize, false);

  function handleResize() {
    const toggle = document.getElementById('toggle');
    try {
      if (window.innerWidth > 768 && toggle) {
        toggle.checked = false;
      }
    } catch (err) {
      console.log(err);
    }
  }

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
      <input className='navigation__toggle' id='toggle' type='checkbox'></input>
      <label className='navigation__btn' htmlFor='toggle'>
        <span></span>
      </label>
      <div className='navigation__popup'></div>
      <nav className='navigation__menu'>
        <div>
          <div className='navigation__menu-item'>
            <NavLink className='navigation__link' to='/'>
              Главная
            </NavLink>
          </div>
          <div className='navigation__menu-item'>
            <NavLink className='navigation__link' to='/movies'>
              Фильмы
            </NavLink>
          </div>
          <div className='navigation__menu-item'>
            <NavLink className='navigation__link' to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </div>
        </div>
        <div className='navigation__menu-item'>
          <NavLink
            className='navigation__link navigation__link_type_btn'
            to='/profile'
          >
            Аккаунт
            <div className='navigation__icon'></div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
