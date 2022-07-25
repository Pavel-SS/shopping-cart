import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCardContext"
import storeItems from "../data/items.json"
import { currencyFormat } from "../util/currencyFormat"



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
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item?.imgURL} style={{
                width:"125px", 
                height:"75px", 
                objectFit:"cover"
                }} 
                alt="pic" 
            />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && 
                                <span className="text-muted" style={{ fontSize:"0.8rem"}}>
                                    x{quantity}
                                </span>
                                }
                </div>
                <div className="text-muted" style={{fontSize:"0.75rem"}}>
                    {currencyFormat(item.price)}
                </div> 
            </div>
                <div >
                    {currencyFormat(item.price * quantity)}
                </div>
                <Button variant="outline-danger" size="sm" onClick={()=>removeFormCart(item.id)}>&times;</Button>
        </Stack>
    )
}