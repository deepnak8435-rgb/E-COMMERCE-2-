import React from 'react'
import "./RelatedPdt.css"
import data_product from '../Assets/data'
import { Item } from '../Item/Item'
export const RelatedPdt = () => {
  return (
    <div className='relatedpdt'>
        <h1>Related products</h1>
        <hr />
        <div className="relatedproducts-item">
{data_product.map((item,i)=>{
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
        </div>
    </div>
  )
}
