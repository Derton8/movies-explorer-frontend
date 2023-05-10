import './AboutProject.scss';

export default function AboutProject(props) {
  return (
    <section className='project' id='project'>
      <h2 className='main__title'>О проекте</h2>
      <div className='project__grid'>
        <div>
          <h3 className='project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className='project__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__plan'>
        <p className='project__plan-title'>1 неделя</p>
        <p className='project__plan-title'>4 недели</p>
      </div>
      <div className='project__plan'>
        <p className='project__plan-subtitle'>Back-end</p>
        <p className='project__plan-subtitle'>Front-end</p>
      </div>
    </section>
  );
}
