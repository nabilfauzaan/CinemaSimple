import { Card, Col, Container, Row, Image } from "react-bootstrap"
import batmanImage from "../assets/images/superhero/batman.jpg"
import ironmanImage from "../assets/images/superhero/ironman.jpg"
import supermanImage from "../assets/images/superhero/superman.png"
import thorImage from "../assets/images/superhero/thor.jpeg"
import wakandaImage from "../assets/images/superhero/wakanda.jpeg"
import widowImage from "../assets/images/superhero/widow.jpeg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Batman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">THE DARK KNIGHT RISES</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={ironmanImage} alt="Ironman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">IRONMAN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="Superman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">MAN OF STEEL</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={thorImage} alt="Thor" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">LOVE THUNDER</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={wakandaImage} alt="Wakanda" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BLACK PANTHER</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={widowImage} alt="Black Widow" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">BLACK WIDOW</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero