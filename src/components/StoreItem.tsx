import { Card } from "react-bootstrap"

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
                <Card.Title className="d-flex justify-content-space-between"></Card.Title>
            </Card.Body>
        </Card>
    )
}