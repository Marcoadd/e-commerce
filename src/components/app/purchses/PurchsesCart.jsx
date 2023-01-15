import React from 'react'
import { changeDateForm } from '../../../utils/date'
import ProductPurchases from './ProductPurchases'
import './style/purchasesCart.css'

const PurchsesCart = ({purchase}) => {
  return (
    <article className='purchaseCard'>
      <h2 className='purchaseCard_date'>{changeDateForm(purchase.createdAt)}</h2>
      <hr className='purchaseCard_line'/>
      <section className='purchaseCard_list'>
        {
          purchase.cart.products.map(productPurchase => <ProductPurchases key={productPurchase.id} productPurchase={productPurchase}/>)
        }
      </section>
    </article>
  )
}

export default PurchsesCart