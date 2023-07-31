import { Card, Col, Container, Row, Image } from "react-bootstrap"
import ffImage from "../assets/images/trending/ff.jpg"
import divergentImage from "../assets/images/trending/divergent.jpg"
import insidiousImage from "../assets/images/trending/insidious.jpg"
import johnImage from "../assets/images/trending/john.jpg"
import kingsmanImage from "../assets/images/trending/kingsman.jpg"
import missionImage from "../assets/images/trending/mission.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={ffImage} alt="Fast & Furious" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">FAST & FURIOUS 8</Card.Title>
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
                            <Image src={divergentImage} alt="Divergent" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">DIVERGENT</Card.Title>
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
                            <Image src={insidiousImage} alt="Insidious" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">INSIDIOUS</Card.Title>
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
                            <Image src={johnImage} alt="John Wick" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">JOHN WICK</Card.Title>
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
                            <Image src={kingsmanImage} alt="Kingsman" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">KINGSMAN</Card.Title>
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
                            <Image src={missionImage} alt="Mission Impossible" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">MISSION IMPOSSIBLE</Card.Title>
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

export default Trending