import { useEffect } from "react";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useScrollSnap from 'react-use-scroll-snap';
import { addNav } from "../../redux/nav";
import About from "./about";
import Contacts from "./contacts";
import Gallery from "./gallery";
import Menu from "../menu/menu";
import Title from "./title";

export default function Main() {
    
    const scrollRef = useRef(null);
    //useScrollSnap({ ref: scrollRef, duration: 500, delay: 400 });


    const dispatch = useDispatch()
    
    const menuRef = useRef(null)
    const aboutRef = useRef(null)
    
    useEffect(()=> {
        dispatch(addNav({
            key: "menu", 
            navFunc: () => {
                menuRef.current.scrollIntoView({block: "start", behavior: "smooth"})
            }
        }))

        dispatch(addNav({
            key: "about", 
            navFunc: () => {
                aboutRef.current.scrollIntoView({block: "start", behavior: "smooth"})
            }
        }))
    }, [menuRef.current, aboutRef.current])

    return <>

        <section ref={scrollRef}>
            
            <Title/>

            <Container style={{minHeight:"100vh"}}>
            <Row className="d-flex justify-content-center align-items-center">
            <Col className="d-flex flex-column align-items-center">
                
                <div ref={aboutRef}><About/></div>
                <hr/>
                <Gallery/>
            </Col>
            </Row>
            </Container>

            <div ref={menuRef}><Menu/></div>

            <Contacts/>
        </section>
    </>
}