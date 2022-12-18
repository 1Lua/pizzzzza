import { Col, Container, Figure, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

export default function Gallery() {

    return <Container
        style={{
            marginTop: "10px"
        }}
    >

        <Parallax
            strength={100}
            renderLayer={(percentage) => (<>
                <div
                    style={{
                        position: "relative",
                        bottom: `${Math.min(percentage*100-50, 0)}%`,
                    }}
                >
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col sm className="d-flex justify-content-center align-items-center"> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro cum doloremque illo eos. Quod laborum nulla nihil quae, repellat praesentium animi veniam harum natus ipsam, dolores, blanditiis veritatis ducimus recusandae.</p>   
                        </Col>
                        <Col sm className="d-flex justify-content-center align-items-center"> 
                            <Figure>
                                <Figure.Image 
                                    src="images/interer.jpg"
                                    width={500}
                                />
                            </Figure>   
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col sm className="d-flex justify-content-left align-items-center">
                            <Figure>
                                <Figure.Image 
                                    src="images/interer2.jpg"
                                    width={500}
                                />
                            </Figure>
                        </Col>
                        <Col sm className="d-flex justify-content-center align-items-center" classNam>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure, unde minus corporis eos eius, neque enim fuga, culpa architecto reiciendis. Perspiciatis incidunt ab qui nulla animi est impedit eaque!</p>  
                        </Col>
                    </Row>
                </div>
            </>)}
        >
        </Parallax>
    </Container>
}