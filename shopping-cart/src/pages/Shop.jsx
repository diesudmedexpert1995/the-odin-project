import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products').then(res => res.json()).then(setProducts)
    }, [])

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}

    </div>
  )
}

export default Shop