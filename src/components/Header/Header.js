import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header(props) {
  return (
    <header className='header'>
      <Link className='header__logo' to='/'></Link>
      <nav className='header__nav'>
        <Link className='header__link' to='/signin'>
          Регистрация
        </Link>
        <Link className='header__link' to='/signup'>
          Войти
        </Link>
      </nav>
    </header>
  );
}
