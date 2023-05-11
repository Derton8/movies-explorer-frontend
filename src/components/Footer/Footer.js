import './Footer.scss';

export default function Footer(props) {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__columns'>
        <p className='footer__column'>&copy; 2023</p>
        <ul className='footer__column'>
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
        </ul>
      </div>
    </footer>
  );
}
