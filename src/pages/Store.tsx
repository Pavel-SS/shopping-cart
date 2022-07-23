import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
export const Store = () => {
    return (
        <>
            <h1>
                Store-1
            </h1>
            <Row lg={3} md={2} xs={1} className="g-3">
                {
                    storeItems.map(item=>{
                        return(
                            <Col key={item.id}>
                                <StoreItem {...item}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}