import '../../styles/header.css';
import Donate from './Donate';
import Title from './Title';

const Header = ({text}) => {

  return(
    <section className='header-section'>
      <Title context='title-header'/>
      <Donate context={'donate-header'}/>
    </section>
  );
}

export default Header;
