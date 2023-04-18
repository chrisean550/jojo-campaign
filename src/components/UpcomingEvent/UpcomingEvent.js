import content from './content.json';
import '../../styles/upcomingEvent.css';
import Content from './Content';



const UpcomingEvent = () => {
  const {heading, line1, line2, line3, line4, line5} = content[0];
  return(
    <section id='upcomingEvent' className='upcoming-event-section'>
      <h3>{heading}</h3>
      <Content heading={heading} line1={line1} line2={line2} line3={line3} line4={line4} line5={line5}/>
    </section>
  );
}

export default UpcomingEvent;
