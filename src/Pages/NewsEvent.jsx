import React from 'react'
import News from '../Home Section/News'
import { Helmet } from 'react-helmet-async';
const NewsEvent = ({ishome}) => {
   
  return (
    <>
    <Helmet>
    <title>Our Upcoming Events - CIPDM</title>
    <meta name="description" content="A page showing Cipdm Uucpming events" />
    </Helmet>
    <section className='md:px-24 px-8 bg-gray-50'>
    <News  ishome = {true} />
    </section>
    </>
  )
}

export default NewsEvent