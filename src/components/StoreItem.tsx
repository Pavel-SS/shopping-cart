import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCardContext"
import { currencyFormat } from "../util/currencyFormat"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgURL: string
}

export const StoreItem: React.FC<StoreItemProps> = ({id, name, price, imgURL}) => {
    const {
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFormCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgURL} height="220px" style={{objectFit: "cover"}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-3">
                        {name}
                    </span>
                    <span className="text-black-50">
                        {currencyFormat(price)}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                            +Add to card
                        </Button>
                        ):
                        <div className="d-flex align-items-center flex-column" style={{gap:"0.5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap:"0.5rem"}}>
                                <Button onClick={() => decreaseCartQuantity(id)}>
                                    -
                                </Button>
                                <div>
                                    <span className="fs-4" style={{marginRight:"5px"}}>
                                        {quantity}
                                    </span>
                                    <span className="fs-5">
                                        in cart
                                    </span>
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>
                                    +
                                </Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={()=>removeFormCart(id)}>
                                Remove
                            </Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}