import Image from '../../imgs/flyer.png';

const Content = ({heading, line1, line2, line3, line4, line5}) => {
  return(
    <div className='upcoming-event-content'>

      <p>{line1}</p><br/>
      <p>{line2}</p><br/>
      <p>{line3}</p><br/>
      <p>{line4}</p><br/>
      <p>{line5}</p><br/><br/>
      <p> <a href={Image}>Click <div> here </div> to see the event flyer!</a></p>
    </div>
  );
}

export default Content;
