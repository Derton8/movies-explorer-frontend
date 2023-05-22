import './AboutMe.scss';

export default function AboutMe(props) {
  return (
    <section className='me'>
      <h2 className='main__title'>Студент</h2>
      <div className='me__columns'>
        <div className='me__column'>
          <div>
            <h3 className='me__title'>Данил</h3>
            <p className='me__subtitle'>Фронтенд-разработчик, 22 года</p>
            <p className='me__text'>
              Я родился в Симферополе, закончил факультет информационных
              технологий СевГУ. Я люблю слушать музыку, а ещё играю на гитаре.
              На последних курсах учебы в университете открыл для себя мир
              frontend разработки. Frotend зацепил меня возможностью увидеть
              почти сразу результат своей работы в виде красивой странички в
              браузере, в отличие от большинства задач в ВУЗе, где часто
              результатом решения являлся набор цифр / символов, который
              выводился в консоль. Frontend — это красиво.
            </p>
          </div>
          <a
            className='me__link'
            href='https://github.com/Derton8'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <div className='me__column'>
          <img
            className='me__image'
            src={require('../../../images/me-image.jpg')}
            alt='Аватар'
          ></img>
        </div>
      </div>
    </section>
  );
}
