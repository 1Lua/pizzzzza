import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { useDispatch } from "react-redux";
import { drinks, foods, pizza } from "../../data-source";
import { addNav } from "../../redux/nav";
import MenuList from "./menu-list";

export default function Menu() {

    const dispatch = useDispatch()
    const [showBar, setShowBar] = useState(false)
    const barMenuRef = useRef(null)
    
    const openBar = () => {
        setShowBar(true)
        setTimeout(()=> {
            barMenuRef.current.scrollIntoView({block: "start", behavior: "smooth"})
        }, 200)
    }
    
    const barRef = useRef(null)
    useEffect(()=> {
        dispatch(addNav({
            key: "barmenu", 
            navFunc: () => {
                barMenuRef.current.scrollIntoView({block: "start", behavior: "smooth"})
            }
        }))
    }, [barRef.current])

    return <>
        <Parallax
            bgImage="images/pizzaback.jpg"
            strength={200}
            blur={{ min: -10, max: 10 }}
        >
            <Parallax
                bgImage="images/smoke.png"
                strength={-1200}
                blur={{ min: -40, max: 90 }}
                style={{backgroundColor: "rgba(0, 0, 0, .6)"}}
            >

                <Container style={{
                    minHeight: "100vh",
                }} className="d-flex justify-content-center align-items-center">
                    <Row >
                        <Col>
                            <Container className="d-flex flex-column justify-content-start align-items-center">
                                
                                <h1 style={{
                                    color: "white"
                                }}>Меню</h1>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Parallax>
        </Parallax>
        
        <Container style={{
            minHeight:"100vh",
            paddingBottom: "1rem"
        }}>
            <Row className="d-flex justify-content-center align-items-center mt-5">
                <Col className="d-flex flex-column align-items-center">
                    <h2>Пицца</h2>
                    <MenuList list={pizza}/>
                    <h2 className="mt-5">Закуски</h2>
                    <MenuList list={foods}/>
                </Col>
            </Row>
        </Container>

        <div ref={barMenuRef}><Parallax
            bgImage="images/barmenu.jpg"
            strength={200}
            blur={{ min: -10, max: 10 }}
        >
            <Parallax
                bgImage="images/pngegg(1).png"
                strength={0}
                blur={{ min: -40, max: 100 }}
                style={{backgroundColor: "rgba(0, 0, 0, .7)"}}
            >

                <Container style={{
                    minHeight: "100vh",
                }} className="d-flex justify-content-center align-items-center">
                    <Row >
                        <Col>
                            <Container className="d-flex flex-column justify-content-start align-items-center">
                                
                                <h1 style={{
                                    color: "white"
                                }}>Бар Меню</h1>
                                {!showBar ? <>
                                    <Button variant="danger" onClick={openBar}>Мне есть 18</Button>
                                    <Button
                                        className="mt-2"
                                        variant="outline-light" 
                                        onClick={()=>{
                                            window.location = "https://www.detmir.ru/"
                                        }}
                                    >Мне нет 18</Button>
                                </>: null}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Parallax>
        </Parallax></div>

        {showBar ? <Container ref={barMenuRef}
            style={{
                minHeight:"100vh",
        }}>
            <Row className="d-flex justify-content-center align-items-center mt-5">
                <Col className="d-flex flex-column align-items-center">
                    <h2>Коктейли</h2>
                    <MenuList list={drinks}/>
                    
                </Col>
            </Row>
        </Container> : null}
    </>
}