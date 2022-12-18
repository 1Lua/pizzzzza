import { Button, Container, Offcanvas } from "react-bootstrap";
import { Book, CalendarCheck, Cart, CupStraw, InfoSquare, Instagram, TelephoneFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../redux/cart";

export default function NavOffcanvas({show, handleClose}) {

    const navs = useSelector(state=> state.nav.navs)
    const dispatch=useDispatch()
    
    const runNav = (key) => {
        const navFunc = navs[key]
        handleClose()
        navFunc()
    }
    

    return <Offcanvas 
        show={show} 
        onHide={handleClose} 
        scroll={false}
        backdrop={true}
    >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Pizzzzza! | Ресторан - бар</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Container>
                <TelephoneFill size="2em"/>
                <a 
                    href="tel:+79964139096"
                    style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "2em"
                    }}
                >
                    +7-996-413-90-96
                </a>
                <br/>
                ул. Вершинина 39А
            </Container>
            <hr />
            <Container className="d-flex flex-column ">
                <Button
                    variant="outline-danger"
                    onClick={()=> {
                        handleClose()
                        dispatch(setShowCart(true))
                    }}
                >
                    <Cart/>  Корзина
                </Button>
                
                <Button
                    variant="outline-danger"
                    className="mt-2"
                    disabled
                >
                    <CalendarCheck/>  Забронировать стол
                </Button>

                <hr/>

                <Button
                    variant="outline-dark"
                    className="mt-2"
                    onClick={()=> {
                        runNav("menu")
                    }}
                >
                    <Book/>  Меню
                </Button>

                <Button
                    variant="outline-dark"
                    className="mt-2" 
                    onClick={()=> {
                        runNav("barmenu")
                    }}
                >
                    <CupStraw/>  Бар меню (18+)
                </Button>

                <Button
                    variant="outline-dark"
                    className="mt-2"
                    onClick={()=> {
                        runNav("about")
                    }}
                >
                    <InfoSquare/>  О нас
                </Button>
            </Container>

            <hr/>
            <Container>
                Мы в Instagram - <a href="https://instagram.com/pizzzzza" style={{textDecoration: "none"}}><Instagram/> pizzzzza</a>
            </Container>
        </Offcanvas.Body>

        
    </Offcanvas>
}