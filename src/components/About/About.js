import content from './content.json';
import '../../styles/about.css';
import Image from './Image';
import Content from './Content';


const About = () => {
  const {heading, paragraph} = content[0];
  return(
    <section className='about-section'>
      <Image />
      <Content heading={heading} paragraph={paragraph}/>
    </section>
  );
}

export default About;
