import content from './content.json';
import '../../styles/mission.css';


const Mission = () => {
  const {heading, paragraph} = content[0];
  return(
    <section className='mission-section'>
      <div className='mission-content'>
        <h3>{heading}</h3>
        <hr/>
        <q>{paragraph}</q>
      </div>
    </section>
  );
}

export default Mission;
