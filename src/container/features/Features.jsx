import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'
 
const featuresData=[
  {
    title:'Improving end distrusts instantly',
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero sed ut, a blanditiis iste delectus ea rerum ratione beatae. Et vel aliquam assumenda nesciunt doloribus quae minus iure illo!'
  },
  {
    title:'Become the tended active',
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero sed ut, a blanditiis iste delectus ea rerum ratione beatae. Et vel aliquam assumenda nesciunt doloribus quae minus iure illo!'
  },  {
    title:'Message or am nothing',
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero sed ut, a blanditiis iste delectus ea rerum ratione beatae. Et vel aliquam assumenda nesciunt doloribus quae minus iure illo!'
  },  {
    title:'Really boy law county',
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero sed ut, a blanditiis iste delectus ea rerum ratione beatae. Et vel aliquam assumenda nesciunt doloribus quae minus iure illo!'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero sed ut, a blanditiis iste delectus ea rerum ratione beatae. Et vel aliquam assumenda nesciunt doloribus quae minus iure illo!
        </h1>
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title+index} />
        ))}
      </div>
    </div>
  )
}

export default Features