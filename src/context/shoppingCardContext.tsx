import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"

type ShoppingCardProviderProps = {
    children: ReactNode
}

type CartItemType = {
    id: number
    quantity: number
}
type ShoppingCardContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFormCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItemType[]
}

const ShoppingCardContext  = createContext({} as ShoppingCardContext)

export const useShoppingCart= () => {
    return useContext(ShoppingCardContext)
}

export const ShoppingCardProvider: React.FC<ShoppingCardProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([])
    const [openOrClose, setOpenOrClose] = useState<boolean>(false)

    const cartQuantity = cartItems.reduce((quantity, item) =>
     item.quantity + quantity, 0)
    const openCart = () => setOpenOrClose(true)
    const closeCart = () => setOpenOrClose(false)
    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    const increaseCartQuantity = (id: number) => {
        setCartItems(items => {
            if(items.find(i => i.id === id) == null){
                return [...items, {id, quantity: 1}]
            }else{
               return items.map(i => {
                    if(i.id === id){
                        return {...i, quantity: i.quantity + 1}
                    } else {
                        return i
                    }
                })
            }
        })
    }
    const decreaseCartQuantity = (id: number) => {
        setCartItems(items => {
            if(items.find(i => i.id === id)?.quantity === 1){
                return items.filter(i => i.id !== id)
            }else{
                return items.map(i => {
                    if(i.id === id){
                        return {...i, quantity: i.quantity - 1}
                    }else{
                        return i
                    }
                })
            }
        })
    }
    const removeFormCart = (id: number) => {
        return setCartItems(items => {
            return items.filter(i => i.id !== id)
        })
    }
    return (
       <ShoppingCardContext.Provider value={{
           getItemQuantity, 
           increaseCartQuantity,
           decreaseCartQuantity,
           removeFormCart,
           cartItems,
           cartQuantity,
           openCart,
           closeCart
           }}>
           {children}
           <ShoppingCart isOpen = {openOrClose}/>
       </ShoppingCardContext.Provider>
    )
}