import React from 'react'
import News from '../Home Section/News'

const NewsEvent = ({ishome}) => {
   
  return (
    <section className='md:px-24 px-8 bg-gray-50'>
    <News  ishome = {true} />
    </section>
  )
}

export default NewsEvent