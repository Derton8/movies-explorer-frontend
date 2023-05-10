import AboutProject from './AboutProject/AboutProject';
import './Main.scss';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';

export default function Main(props) {
  return (
    <main className='main'>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
    </main>
  );
}
