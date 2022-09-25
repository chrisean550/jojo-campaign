import Heading from './Heading';
import LearnMore from './LearnMore';
import content from './content.json';
import '../../styles/hero.css';

const Hero = () => {
  const {heading} = content[0];
  return(
    <section id='hero-section' className='hero-section'>
      <div className='content'>
        <Heading text={heading}/>
        <LearnMore />
      </div>
    </section>
  );
}

export default Hero;
