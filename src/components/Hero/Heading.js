import content from './content.json';

const Heading = ({text}) => {

  return(
    <h1 className='heading'>
      {text}
    </h1>
  );
}

export default Heading;