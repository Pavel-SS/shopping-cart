import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCardContext"
import { currencyFormat } from "../util/currencyFormat"
import storeItems from "../data/items.json"
import { CartItem } from "./CartItem"

type ShoppingCartProps = {
    isOpen: boolean
}
export const ShoppingCart: React.FC<ShoppingCartProps> = ({isOpen}) => {
    const {closeCart, cartItems} = useShoppingCart()
    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
             <Offcanvas.Header closeButton>
                 <Offcanvas.Title>
                     Cart 
                 </Offcanvas.Title>
             </Offcanvas.Header>
             <Offcanvas.Body>
                 <Stack gap={3}>
                    {cartItems.map(item=>
                        <CartItem key={item.id} {...item}/>
                    )}
                    <div className="ms-auto fw-bold fs-5">
                        Total: {currencyFormat(cartItems.reduce((total, current)=>{
                            const item = storeItems.find(i => i.id === current.id)
                            return total + (item?.price || 0) * current.quantity
                        },0))}
                    </div>
                 </Stack>
             </Offcanvas.Body>
        </Offcanvas>
    )
}