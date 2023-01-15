import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/app/home/Categories'
import ProductCard from '../components/app/home/ProductCard'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

  const [nameProduct, setNameProduct] = useState('')
  const [category, setCategory] = useState('')
  const [filterProducts, setFilterProducts] = useState([])
  const products = useSelector(state => state.products)

  const [showMenu, setShowMenu] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newName = e.target.nameProduct.value
    setNameProduct(newName)
  }

  const handleShowFilter = () => {
    setShowMenu(!showMenu)
  }

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
      setFilterProducts(products)
  }, [products])
  
  useEffect(() => {
    const newProducts = products.filter(product => product.title.includes(nameProduct) && (product.category.id == category || !category) )
    setFilterProducts(newProducts)
  }, [nameProduct, category])
  

  return (
    <main className='home'>

     
     <div className='categories'>
        <div className={`positionFixed ${showMenu ? '' : 'active'}`}>
          <Categories setShowMenu={setShowMenu} showMenu={showMenu} setCategory={setCategory}/>
        </div>
      </div>

      <div className='home__container'>
  
      <form className='home__form' onSubmit={handleSubmit}>
        <div className='home__form-div'>
          <input className='home__form-input' type="text" id='nameProduct' placeholder='What are you looking for' />
          <button className='home__form-btn'><i className='bx bx-search'></i></button>
        </div>
      </form>

      <div className='icon__filter'>
        <i onClick={handleShowFilter} className='bx bx-filter' ></i>
      </div>
  
        <section className='home__containerProducts'>
          {
            filterProducts.map(product => <ProductCard key={product.id} product={product} />)
          }
        </section>
      </div>
      
    </main>
  )
}

export default Home