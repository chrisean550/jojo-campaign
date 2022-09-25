const Content = ({heading, paragraph}) => {
  return(
    <div className='speech-content'>
      <h3>{heading}</h3>
      <hr/>
      <p>{paragraph}</p>
    </div>
  );
}

export default Content;
