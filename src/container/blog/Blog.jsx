import React from 'react'
import Article from '../../components/article/Article';
import {blog01,blog02,blog03,blog04,blog05} from './imports';
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A peek into <br />Some of our products</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='Sep 26, 2021' text='GPT-3 and Open AI is the future. Let us explore how it is?' />
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date='Sep 26, 2021' text='Explore our products' />
        <Article imgUrl={blog03} date='Sep 26, 2021' text='Explore our products' />
        <Article imgUrl={blog04} date='Sep 26, 2021' text='Explore our products' />
        <Article imgUrl={blog05} date='Sep 26, 2021' text='Explore our products' />
        </div>
      </div>
    </div>
  )
}

export default Blog