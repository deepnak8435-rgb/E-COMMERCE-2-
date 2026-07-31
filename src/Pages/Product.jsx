import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import {all_product} from '../components/Assets/all_product'
import { Breadcrums } from '../components/Breadcrums/Breadcrums'
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay'
import { Description } from '../components/Decription/Description'
import { RelatedPdt } from '../components/RelatedProdcuts/RelatedPdt'

export const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();

  
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
<Breadcrums product={product}/>
<ProductDisplay product={product}/>
<Description/>
<RelatedPdt/>
    </div>
  )
}
export default Product