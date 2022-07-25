import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCardContext"
import storeItems from "../data/items.json"



type CartItemPropsType = {
    id: number
    quantity: number
}

export const CartItem: React.FC<CartItemPropsType> = ({id, quantity}) => {
    const {removeFormCart} =  useShoppingCart()
    const item = storeItems.find(i => i.id === id)

    if(item == null) {
        return null
    }
    return(
        <Stack direction="horizontal" gap={2}>
            <img src={item?.imgURL} style={{
                width:"125px", 
                height:"75px", 
                objectFit:"cover"
                }} 
                alt="pic" 
            />
        </Stack>
    )
}