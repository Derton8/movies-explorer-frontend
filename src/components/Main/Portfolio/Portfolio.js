import './Portfolio.scss';

export default function Portfolio(props) {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Derton8/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span>↗</span>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            href='https://github.com/Derton8/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span>↗</span>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link portfolio__link_last'
            href='https://github.com/Derton8/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
