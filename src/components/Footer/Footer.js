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
          <a href='https://www.facebook.com/profile.php?id=100089377092709&mibextid=ZbWKwL'><i className="fa-brands fa-facebook"></i></a>
          <a href='https://www.instagram.com/jojo_burgess_for_mayor/'><i className="fa-brands fa-instagram"></i></a>
          <a href='https://twitter.com/JoJoBForMayor'><i className="fa-brands fa-twitter"></i></a>

        </div>
        <Donate context={'donate-footer'}/>
      </div>
    </section>
  );
}

export default Footer;
