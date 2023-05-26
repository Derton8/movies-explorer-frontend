import { ReactComponent as FailIcon } from '../../images/fail-icon.svg';
import { ReactComponent as SuccessIcon } from '../../images/success-icon.svg';
import './InfoTooltip.scss';

export default function InfoTooltip(props) {
  const { isOpen, onClose, tooltipStatus } = props;

  let tooltipText = '';
  switch (tooltipStatus) {
    case '409':
      tooltipText = 'Пользователь с таким email уже существует.';
      break;
    case 'success':
      tooltipText = 'Данные были успешно сохранены.';
      break;
    case '401':
      tooltipText = 'Вы ввели неправильный логин или пароль.';
      break;
    default:
      tooltipText = 'Что-то пошло не так! Попробуйте ещё раз.';
  }

  return (
    <section className={`popup popup-tooltip ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button
          className='popup__close-btn'
          type='button'
          onClick={onClose}
        ></button>
        {tooltipStatus === 'success' ? <SuccessIcon /> : <FailIcon />}
        <h2 className='popup__title'>{tooltipText}</h2>
      </div>
    </section>
  );
}
