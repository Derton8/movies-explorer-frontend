import { useLocation } from 'react-router-dom';
import './MoviesCard.scss';

export default function MoviesCard(props) {
  const { link } = props;
  const location = useLocation();

  const handleIconClick = (e) => {
    if (location.pathname === '/movies') {
      e.target.classList.toggle('movie__btn-like_active');
    } else {
      console.log('Удалить');
    }
  };

  return (
    <div className='movie'>
      <div className='movie__container'>
        <div className='movie__column'>
          <h2 className='movie__title'>33 слова о дизайне</h2>
          <p className='movie__duration'>1ч 47м</p>
        </div>
        <button
          className={
            location.pathname === '/movies'
              ? 'movie__btn-like'
              : 'movie__btn-delete'
          }
          type='button'
          onClick={handleIconClick}
        ></button>
      </div>
      <img className='movie__img' alt='Обложка фильма' src={link} />
    </div>
  );
}
