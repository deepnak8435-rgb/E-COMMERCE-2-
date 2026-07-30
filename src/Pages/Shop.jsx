import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/Offers/Offers'
import Newcollection from '../components/Newcollections/Newcollection'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'


export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
       <Newcollection/>
       <NewsLetter/>
    </div>
  )
}
export default Shop