import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/categories.css'

const Categories = ({setCategory, showMenu, setShowMenu}) => {
  
  const [categories, setCategories] = useState()

  const handleClickCategory = (id) => {
    setCategory(id)
  }

  const handleClickX = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
      axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
  }, [])
  

  return (
    <section>

      <div className='icon__X'>
        <i onClick={handleClickX} className='bx bx-x '></i>
      </div>

      <ul>
        <li onClick={() => (handleClickCategory(''))}>All Products</li>
        {
          categories?.map(category => <li onClick={() => (handleClickCategory(category.id))} key={category.id}>{category.name}</li>)
        }
      </ul>
    </section>
  )
}

export default Categories