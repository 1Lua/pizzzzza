import { Col, Container, Row } from "react-bootstrap";
import Iframe from "react-iframe";
import { Parallax } from "react-parallax";

export default function Contacts() {

    return <>
        <Parallax
            bgImage="images/interer.jpg"
            strength={200}
            blur={{ min: -40, max: 40 }}
            style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}
        >

            <Container style={{
                minHeight: "100vh"
            }} className="d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <Container className="d-flex flex-column justify-content-start align-items-center">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.685459145022!2d84.95934713568958!3d56.45974260864625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4326935325eab00b%3A0x12a341a6fc926bab!2z0J7QsdGJ0LXQttC40YLQuNC1IDE0INCk0JPQkNCe0KMg0JLQniDQndCYINCi0J_Qow!5e0!3m2!1sru!2sru!4v1669112200683!5m2!1sru!2sru"
                                width={800}
                                height={600} 
                            >  
                            </Iframe>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Parallax>
    </>
}