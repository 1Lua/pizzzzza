import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Dash, Plus, Trash } from "react-bootstrap-icons";

export default function CartItem({payload, remove, setCount}) {
    const [sum, setSum] = useState(0)

    useEffect(() => {
        const sum = payload.cost * payload.count
        setSum(sum)
    }, [payload])

    
    return <Container 
        key={payload.id}
        className="d-flex mt-2 justify-content-between align-items-end border-bottom pb-2"
    >
        <div className="d-flex">
            <Image
                width={100}
                src={payload.photo}
            >
            </Image>
            <div className="d-flex flex-column ms-2">
                <h5>{payload.name}</h5>
                <div className="d-flex align-items-end">
                    <Button
                        variant="outline-dark"
                        onClick={() => {
                            console.log("item", Math.min(0, payload.count - 1))
                            setCount(Math.max(0, payload.count - 1))
                        }}
                    ><Dash/></Button>
                    <h5 className="m-2">{payload.count}</h5>
                    <Button
                        variant="outline-dark"
                        onClick={() => {
                            setCount(Math.min(100, payload.count + 1))
                        }}
                    ><Plus/></Button>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-end ms-2">
            <h6 className="me-2">Стоимость: {sum}</h6>
            
            <Button 
                variant="outline-danger"
                onClick={remove}
            ><Trash/></Button>
        </div>
    </Container>
}