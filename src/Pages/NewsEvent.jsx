import React from 'react'
import News from '../Home Section/News'

const NewsEvent = ({ishome}) => {
   ishome = true
  return (
    <section className='px-24 bg-gray-50'>
    <News  ishome = {true} />
    </section>
  )
}

export default NewsEvent