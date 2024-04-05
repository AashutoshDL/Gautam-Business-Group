import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';


const Possibility = () => {
  return (
    <div className ='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Reqeust Early access to get started</h4>
        <h1 className='gradient__text'> The possibilities are <br /> beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit sunt fugit modi eaque voluptatem perspiciatis nemo vitae? Sed repellat unde omnis ratione vel nesciunt eum dicta iusto qui vitae.</p>
        <h4>Request Early access to get started</h4>
      </div>
    </div>
  )
};


export default Possibility;