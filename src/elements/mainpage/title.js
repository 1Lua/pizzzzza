import { Col, Container, Figure, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

export default function Title() {
    return <>
        <Parallax
            bgImage="images/interer2.jpg"
            strength={300}
            blur={{ min: -20, max: 20 }}
        >
            <Container style={{
                height: "100vh",
            }} className="d-flex justify-content-center align-items-center">
                <Row >
                    <Col>
                        <Container className="d-flex flex-column justify-content-center align-items-center">
                            <Figure>
                                <Figure.Image 
                                    src="images/pizzalogo.png"
                                    width={300}
                                    height={300}
                                />
                            </Figure>
                            <h1 style={{color: "white"}}>Pizzzzza!</h1>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Parallax>
    </>
}