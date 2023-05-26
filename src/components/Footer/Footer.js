import { useLocation } from 'react-router-dom';

import './Footer.scss';

export default function Footer(props) {
  const location = useLocation();

  return (
    <footer
      className='footer'
      style={{
        display:
          location.pathname === '/movies' ||
          location.pathname === '/saved-movies' ||
          location.pathname === '/'
            ? 'block'
            : 'none',
      }}
    >
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__columns'>
        <p className='footer__column'>&copy; 2023</p>
        <div className='footer__column'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            href='https://github.com/Derton8'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
