import React,{useState,useEffect} from 'react'
// import people from '../../assets/people.png'
// import ai from '../../assets/ai.png'
import chemical from '../../assets/chemical.png'
import './header.css'


const Header = () => {
  // Define state for the header text
  const [headerText, setHeaderText] = useState('');

  // Simulate a typewriter effect for the header text
  useEffect(() => {
    const text = "Welcome to Gautam Chemicals!Step into a world of innovation and excellence. Explore our offerings and discover the essence of Gautam Chemicals. From high-quality chemicals to personalized solutions, we're here to exceed your expectations.Get in touch with us to explore opportunities for collaboration.We look forward to welcoming you into the Gautam Chemicals family."
    let currentIndex = 0;

    const interval = setInterval(() => {
      setHeaderText(text.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
  <div className='gpt3__header section__padding' id="home">
    <div className='gpt3__header-content'>
      <h1 className='gradient__text'>Welcome to <br /> Gautam Chemicals</h1>
      <p>{headerText}</p>
      {/* <div className='gpt3__header-content__input'>
        <input type='email' placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
      </div> */}
      {/* <div className='gpt3__header-content__people'>
        <img src={people} alt=' ' />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>
    <div className='gpt3__header-image'>
      <img src={chemical} alt=' ' />
    </div>
  </div>
  )
}

export default Header