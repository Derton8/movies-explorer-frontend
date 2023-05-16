import './MoviesCard.scss';

export default function MoviesCard(props) {
  const { link } = props;

  const handleIconClick = (e) => {
    e.target.classList.toggle('movie__btn_active');
  };

  return (
    <div className='movie'>
      <div className='movie__container'>
        {/* <div className='movie__column'>
          <h2 className='movie__title'>
            33 слова о дизайне ssds dsdsd sdsddsdsd sdsdsdsd
          </h2>
          <p className='movie__duration'>1ч 47м</p>
        </div> */}
        <h2 className='movie__title'>
          33 слова о дизайне ssds dsdsd sdsddsdsd sdsdsdsd
        </h2>
        <button
          className='movie__btn'
          type='button'
          onClick={handleIconClick}
        ></button>
      </div>
      <img className='movie__img' alt='Обложка фильма' src={link} />
    </div>
  );
}
