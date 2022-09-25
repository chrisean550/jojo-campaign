import content from './content.json';
import '../../styles/speech.css';
import Video from './Video';
import Content from './Content';


const Speech = () => {
  const {heading, paragraph} = content[0];
  return(
    <section className='speech-section'>
      <Video />
      <Content heading={heading} paragraph={paragraph}/>
    </section>
  );
}

export default Speech;
