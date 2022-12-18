import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import NavOffcanvas from "./nav-offcanvas";

export default function Nav() {

    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return <Navbar fixed="top">
    <Container>
        <Button
            variant="outline-danger" 
            size="lg"
            onClick={()=> {
                if(show) {
                    handleClose()
                } else {
                    handleOpen()
                }
            }}
        ><List/></Button>
    </Container>
    <NavOffcanvas show={show} handleClose={handleClose}/>
  </Navbar>
}