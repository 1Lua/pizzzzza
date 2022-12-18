import { Col, Container, Figure, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

export default function About() {
    
    return <Container
    style={{
        marginTop: "10px"
    }}
>

        <Parallax
            strength={300}
            renderLayer={(percentage) => (<>
                <div
                    style={{
                        position: "relative",
                        bottom: `${Math.min(percentage*100-70, 0)}%`,
                    }}
                >
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col sm className="d-flex justify-content-center align-items-center"> 
                            <Figure>
                                <Figure.Image 
                                    src="images/pizzalogo.png"
                                    width={300}
                                    height={300}
                                />
                                <Figure.Caption>Pizzzzza!</Figure.Caption>
                            </Figure>   
                        </Col>
                        <Col sm className="d-flex justify-content-center align-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae iusto quisquam ratione veniam iure, vero omnis ex voluptatem, consequatur fugit accusamus nobis quas libero eligendi! Maxime assumenda eaque fugit.
                        </Col>
                        <Col sm className="d-flex justify-content-center align-items-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae iusto quisquam ratione veniam iure, vero omnis ex voluptatem, consequatur fugit accusamus nobis quas libero eligendi! Maxime assumenda eaque fugit.
                        </Col>
                    </Row>
                </div>
            </>)}
        >
        </Parallax>
    </Container>
}