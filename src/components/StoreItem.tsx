import { Card } from "react-bootstrap"
import { currencyFormat } from "../util/currencyFormat"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgURL: string
}

export const StoreItem: React.FC<StoreItemProps> = ({id, name, price, imgURL}) => {
    return (
        <Card>
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
            </Card.Body>
        </Card>
    )
}