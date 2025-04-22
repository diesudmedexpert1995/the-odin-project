import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useCart } from '../context/CartContext'


const ProductCard = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const {addToCart} = useCart()
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
    <h3 className="text-lg font-semibold mb-2 line-clamp-2 h-12">{product.title}</h3>
    <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
    <div className="flex items-center justify-center space-x-2 mb-3">
      <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">-</button>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={e => setQuantity(Number(e.target.value))}
        className="w-14 text-center border rounded"
      />
      <button onClick={() => setQuantity(q => q + 1)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">+</button>
    </div>
    <button
      onClick={() => addToCart(product, quantity)}
      className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
    >
      Add to Cart
    </button>
  </div>
  )
}

ProductCard.propType = {
    product: PropTypes.object.isRequired,
}

export default ProductCard