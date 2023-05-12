import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export default function Navigation(props) {
  return (
    <>
      <nav className='nav'>
        <div>
          <NavLink className='nav__link' to='/movies'>
            Фильмы
          </NavLink>
          <NavLink className='nav__link' to='/saved-movies'>
            Сохранённые фильмы
          </NavLink>
        </div>
        <div>
          <NavLink className='nav__link nav__link_type_btn' to='/profile'>
            Аккаунт
            <div className='nav__icon'></div>
          </NavLink>
        </div>
      </nav>
      <button className='nav__button'></button>
    </>
  );
}
