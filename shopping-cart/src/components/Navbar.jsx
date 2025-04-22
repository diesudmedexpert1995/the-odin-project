import React from 'react'
import { Link } from 'react-router-dom'
import {useCart} from '../context/CartContext'

const Navbar = () => {
  const {cartCount} = useCart()
  return (
    <nav className="p-4 bg-white shadow flex justify-between items-center">
        <div className="space-x-4 text-lg font-medium">
          <Link to="/" className='hover:text-blue-500 translation'>Home</Link>
          <Link to="/shop" className='hover:text-blue-500 transition'>Shop</Link>
        </div>
        <div className="flex items-center space-x-2">
            <span className="text-gray-600">Count: {cartCount}</span>
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">Checkout</button>
        </div>
    </nav>
  )
}

export default Navbar