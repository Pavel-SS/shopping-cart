import { createContext, ReactNode, useContext } from "react"

type ShoppingCardProviderProps = {
    children: ReactNode
}
type ShoppingCardContext = {
    getItemQuantity: (id: number) => number
    increaseCardQuantity: (id: number) => void
    decreaseCardQuantity: (id: number) => void
    removeFormCard: (id: number) => void
}

const ShoppingCardContext  = createContext({} as ShoppingCardContext)

export const useShopipingCart= () => {
    return useContext(ShoppingCardContext)
}

export const ShoppingCardProvider: React.FC<ShoppingCardProviderProps> = ({children}) => {
    return (
       <ShoppingCardContext.Provider value={{}}>
           {children}
       </ShoppingCardContext.Provider>
    )
}