import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
export const Store = () => {
    return (
        <>
            <h1>
                Store-1
            </h1>
            <Row>
                {
                    storeItems.map(item=>{
                        return(
                            <Col>
                                {JSON.stringify(item)}
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}