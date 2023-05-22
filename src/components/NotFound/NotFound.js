import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound(props) {
  const navigate = useNavigate();

  return (
    <>
      <main className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <h2 className='not-found__subtitle'>Страница не найдена</h2>
      </main>
      <button className='not-found__btn' onClick={() => navigate(-1)}>
        Назад
      </button>
    </>
  );
}
