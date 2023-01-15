import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCart } from '../../../store/slices/cart.slice'
import './style/productInfo.css'

const positionImages = ['first', 'second', 'third']

const ProductInfo = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const dispatch = useDispatch()

  const handleClickLeft = () => {
    const newValue = currentImage - 1
  if(currentImage >= 0) {
     setCurrentImage(newValue)
    }else{
      setCurrentImage(positionImages.length - 1)
    }
  }

  const handleClickRight = () => {
    const newValue = currentImage + 1
  if(currentImage <=2)  {
    setCurrentImage(newValue)
  }else{
    setCurrentImage(0)
  }
 }

  const handleMinus = () => {
    const newValue = quantity -1 
    if(newValue >= 1){
      setQuantity(newValue)
    }
  }

  const handlePlus = () => {
    setQuantity(quantity+1)
  }

  const handleAddProduct = () => {
    
    const data = {
      id: product.id,
      quantity: quantity
  }
  dispatch(addProductCart(data))
  }

  return (
    <article className='productInfo' >

      <div className='productInfo__slider'>

        <div className={`productInfo__slider-container ${positionImages[currentImage]}`}>
        <img  src={product?.productImgs[0]} alt="" />
        <img  src={product?.productImgs[1]} alt="" />
        <img  src={product?.productImgs[2]} alt="" />
        </div>

        <i onClick={handleClickLeft} className='bx bx-chevron-left'></i>
        <i onClick={handleClickRight} className='bx bx-chevron-right'></i>

      </div>

      <div className='productInfo_info'>
          <h2 className='productInfo__title'>{product?.title}</h2>
          <p className='productInfo__description'>{product?.description}</p>
          <footer className='productInfo__footer'>
            <div className='productInfo__container-Price'>
              <h3 className='productInfo__priceTitle'>Price</h3>
              <span className='productInfo__price'>${product?.price}</span>
            </div>
            <div className='productInfo__container-quantity'>
              <h3 className='productInfo__quantity-title' >Quantity</h3>
              <div className='productInfo__contain-counter'>
                <div className='productInfo__minus' onClick={handleMinus}>-</div>
                <div className='productInfo__counter'>{quantity}</div>
                <div className='productInfo__plus' onClick={handlePlus}>+</div>
              </div>
            </div>
            <button onClick={handleAddProduct} className='productInfo__btn'>Add To Cart <i className='bx bx-cart-add'></i></button>
          </footer>
      </div>
      
    </article>
  )
}

export default ProductInfo