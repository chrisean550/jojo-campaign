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
    <button className='learn-more' onClick={scroll}>
      Learn More
    </button>
  );
}

export default LearnMore;
