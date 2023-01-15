import axios from 'axios'
import React, { useEffect, useState} from 'react'
import ProductCard from '../home/ProductCard'
import './style/similarProducts.css'

const SimilarProducts = ({categories, product}) => {

  const [productsByCategory, setproductsByCategory] = useState()
  
useEffect(() => {
if(categories && product){
  const category = categories.filter(category => category.name == product.category)  
 const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${category[0].id}`
  axios.get(URL)
  .then(res => {
    const productsFilter = res.data.data.products.filter(productCategory => productCategory.id != product.id)
    setproductsByCategory(productsFilter)
  })
  .catch(err => console.log(err))
}
}, [categories, product])


  return (
    <section className='similarProducts'>
      {
        productsByCategory?.map(productByCategory => <ProductCard key={productByCategory.id} product={productByCategory}/>)
      }
    </section>
  )
}

export default SimilarProducts
