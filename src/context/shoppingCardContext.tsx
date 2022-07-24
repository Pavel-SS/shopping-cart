import { createContext, ReactNode, useContext, useState } from "react"

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
    increaseCardQuantity: (id: number) => void
    decreaseCardQuantity: (id: number) => void
    removeFormCard: (id: number) => void
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
    const increaseCardQuantity = (id: number) => {
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
    const decreaseCardQuantity = (id: number) => {
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
    const  removeFormCard = (id: number) => {
        return setCartItems(items => {
            return items.filter(i => i.id !== id)
        })
    }
    return (
       <ShoppingCardContext.Provider value={{
           getItemQuantity, 
           increaseCardQuantity,
           decreaseCardQuantity,
           removeFormCard,
           cartItems,
           cartQuantity,
           openCart,
           closeCart
           }}>
           {children}
           <ShoppingCart/>
       </ShoppingCardContext.Provider>
    )
}