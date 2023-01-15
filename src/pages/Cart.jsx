import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice'
import './styles/cart.css'

const Cart = () => {
  
 const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleClickPurchases = () => {
    const  data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    };
    dispatch(purchaseCart(data))
  }

  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])
  
  return (
    <main className='cart'>
      <section className='cart__list'>
        {
          cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct} />)
        }
        {
          !cart.length && (
            <h2 className='notProducts'>Not Found Products In Cart</h2>
          )
        }
        {
          cart.length && (
            <div className='cart__btn-container'>
            <button onClick={handleClickPurchases} className='cart__btn-btn'>purchases cart</button>
          </div>
          )
        }
      
      </section>
    </main>
  )
}

export default Cart
