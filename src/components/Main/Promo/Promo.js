import './Promo.scss';

export default function Promo(props) {
  return (
    <section className='promo'>
      <img
        className='promo__image'
        src={require('../../../images/promo-image.png')}
        alt='Промо'
      ></img>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <p className='promo__subtitle'>
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <a className='promo__btn' href='#project'>
        Узнать больше
      </a>
    </section>
  );
}
