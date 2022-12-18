import { Button, Offcanvas } from "react-bootstrap";
import { Cart, XLg } from "react-bootstrap-icons";


export default function CartOffcanvas({show, handleClose, sum, openCart}) {

    return <Offcanvas
        show={show} 
        onHide={handleClose} 
        scroll={true}
        backdrop={false}
        placement="bottom"
        style={{
            maxHeight: "4rem",
            backgroundColor: "rgba(255, 255, 255, 0.8)"
        }}
    >
        <Offcanvas.Body>
            <div className="d-flex justify-content-between d-flex align-items-end">
                <div className="d-flex">
                    <Cart size={30}/>
                    <h5>Сумма: {sum}</h5>
                </div>
                <div>
                    <Button 
                        variant="outline-danger"
                        onClick={openCart}
                    >Открыть корзину</Button>
                    <Button 
                        className="ms-2"
                        variant="outline-dark"
                        onClick={handleClose}
                    ><XLg/></Button>
                </div>
            </div>
        </Offcanvas.Body>
    </Offcanvas>
}