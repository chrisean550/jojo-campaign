const LearnMore = () => {

  const scroll = () => {
    let hero = document.getElementById('hero-section');
    let header = document.getElementById('header-section');
    let height = header.offsetHeight + hero.offsetHeight;
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    });
  }

  return (
    <a href='#about' className='learn-more' onClick={scroll}>
      Learn More
    </a>
  );
}

export default LearnMore;
