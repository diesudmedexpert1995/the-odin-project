import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}){
    const [cart, setCart] = useState([])
    const addToCart = (product, quantity)=>{
        setCart(prev=>{
            const isExisting = prev.find(item => item.id === product.id)
            if (isExisting) {
                return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity+quantity}
                : item)
        
            }
            return [...prev, {product, quantity}]
        })
    }
    const cartCount = cart.reduce((sum, item) => sum+item.quantity, 0)
  return (
    <CartContext.Provider value={{cart, addToCart, cartCount}}>
        {children}
    </CartContext.Provider>
  )
}
