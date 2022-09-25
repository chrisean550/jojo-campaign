import '../../styles/footer.css';
import Donate from '../Header/Donate';
import Title from '../Header/Title';


const Footer = () => {
  return(
    <section className='footer-section'>
      <hr/>
      <div className='footer-content'>
        <Title context='title-footer'/>
        <div className='social-media'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <Donate context={'donate-footer'}/>
      </div>
    </section>
  );
}

export default Footer;
