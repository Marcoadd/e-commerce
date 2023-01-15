import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart } from '../../store/slices/cart.slice'
import './styles/cartProducts.css'

const CartProduct = (cartProduct) => {
  const dispatch = useDispatch()

  const price = cartProduct.cartProduct.productsInCart.quantity * cartProduct.cartProduct.price

  const handleDeleteProduct = () => {
    dispatch(deleteProductCart(cartProduct.cartProduct.id))
  }

  return (
    <article className='cartProduct'>
      <h4 className='cartProduct__brand'>{cartProduct.cartProduct.brand}</h4>
      <h3 className='cartProduct__title'>{cartProduct.cartProduct.title}</h3>
      <div className='cartProduct__quantity'>
        <p>{cartProduct.cartProduct.productsInCart.quantity}</p>
      </div>
      <footer className='cartProduct__footer'>
        <h3 className='cartProduct__price'><span className='cartProduct__price-title'>Total:</span>{price.toFixed(2)}</h3>
      </footer>
      <i onClick={handleDeleteProduct} className='cartProduct__trash bx bx-trash' ></i>
    </article>
  )
}

export default CartProduct