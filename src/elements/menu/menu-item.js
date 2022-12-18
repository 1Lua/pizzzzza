import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Cart, Dash, Plus } from "react-bootstrap-icons";

export default function MenuItem({
    id, 
    name, 
    cost, 
    description, 
    photo, 
    addToCart, 
    setCountInCart, 
    removeFromCart,
    openCart
}) {
    const [count, setCount] = useState(0)
    
    return <Card>
        <Card.Img variant="top" src={photo} style={{
            objectFit: "contain",
            height: "15rem",
            width: "100%",
        }}/>
        <Card.Body>
            <Card.Title style={{height: "2rem"}}>

                <Row className="d-flex justify-content-between">
                    <Col sm>
                        {name}
                    </Col>
                    <Col sm className="d-flex justify-content-end">
                        <>{cost}₽</>
                    </Col>
                </Row>
            </Card.Title>
            <hr/>
            <Card.Text>{description}</Card.Text>

            {count > 0 ? <>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <Button
                            variant="outline-dark"
                            onClick={() => {
                                setCount(val => {
                                    const count = Math.max(0, val - 1)
                                    return count
                                })
                            }}
                        ><Dash/></Button>
                        <h5 className="m-2">{count}</h5>
                        <Button
                            variant="outline-dark"
                            onClick={() => {
                                setCount(val => {
                                    const count = val + 1
                                    return count
                                })
                            }}
                        ><Plus/></Button>
                    </div>
                    <Button 
                        variant="outline-danger" 
                        onClick={ () => {
                            addToCart()
                            setCountInCart(count)
                            setCount(0)
                        }}
                    >
                        <Cart/> Добавить
                    </Button>
                </div>
            </> : <>
                <Button 
                    variant="dark"
                    onClick={()=>{
                        setCount(1)
                    }}
                >Купить</Button>
            </>}
        </Card.Body>
    </Card>
}