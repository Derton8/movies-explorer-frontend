import { useLocation } from 'react-router-dom';

import img1 from '../../images/img-1.png';
import img2 from '../../images/img-2.png';
import img3 from '../../images/img-3.png';
import img4 from '../../images/img-4.png';
import img5 from '../../images/img-5.png';
import img6 from '../../images/img-6.png';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.scss';

export default function MoviesCardList(props) {
  const location = useLocation();

  return (
    <section className='cards'>
      <ul className='cards__list'>
        <li>
          <MoviesCard link={img1}></MoviesCard>
        </li>
        <li>
          <MoviesCard link={img2}></MoviesCard>
        </li>
        <li>
          <MoviesCard link={img3}></MoviesCard>
        </li>
        <li>
          <MoviesCard link={img4}></MoviesCard>
        </li>
        <li>
          <MoviesCard link={img5}></MoviesCard>
        </li>
        <li>
          <MoviesCard link={img6}></MoviesCard>
        </li>
      </ul>
      <div className='cards__container'>
        <button
          className='cards__btn'
          type='button'
          style={{ display: location.pathname === '/saved-movies' && 'none' }}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}
