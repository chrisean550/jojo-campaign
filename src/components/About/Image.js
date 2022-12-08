import { useState, useEffect } from 'react';
import image1 from '../../imgs/about-imgs/113457.jpg';
import image2 from '../../imgs/about-imgs/113604.jpg'
import image3 from '../../imgs/about-imgs/113749.jpg'
import image4 from '../../imgs/about-imgs/113800.jpg'
import image5 from '../../imgs/about-imgs/114252.jpg'
import image6 from '../../imgs/about-imgs/115015.jpg'
import image7 from '../../imgs/about-imgs/115058.jpg'
import image8 from '../../imgs/about-imgs/165813.jpg'

/* eslint-disable */
const Image = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const[background, setBackground] = useState({
    backgroundImage: `url(${images[0]})`,
  });

  let count = 0;
  // const [count, setCount] = useState(0)

  useEffect(() => {
      setInterval(()=>{
        count < 7 ? count++ :  count = 0;
        // count < 8 ? setCount(count + 1) : setCount(0);
        setBackground({
          backgroundImage: `url(${images[count]})`,
      })
      }, 10000)
    } 
  ,[])
  return(
  <div className='about-image' style={background}></div>
  );
}

export default Image;
