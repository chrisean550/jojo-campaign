const About = ({heading, paragraph}) => {
  return(
    <div className='about-content'>
      <h3>{heading}</h3>
      <hr/>
      <p>{paragraph}</p>
    </div>
  );
}

export default About;
