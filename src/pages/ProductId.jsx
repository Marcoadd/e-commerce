import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../components/app/productId/ProductInfo'
import SimilarProducts from '../components/app/productId/SimilarProducts'
import './styles/productId.css'

const ProductId = () => {
  const [product, setProduct] = useState()
  const [categories, setCategories] = useState()
  const {id} =useParams()


  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
      axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
  }, [id])

  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
      axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [id])
  


  return (
    <main className='productId'>
      <section className='productId__path'>
          <Link to={'/'} className='productId__home'>Home</Link>
          <div className='productId__point'></div>
          <h4 className='productId__nameProduct'>{product?.title}</h4>
      </section>
        <ProductInfo product={product}/>
        <SimilarProducts product={product} categories={categories} />
    </main>
  )
}

export default ProductId