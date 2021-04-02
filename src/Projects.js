import React from 'react';
import "./Projects.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
        <div>
        <div id="about__Div">
        <h1 className="about__Text">Projects</h1>
    </div>
          <Container>
            <Row xs={4} md={8} lg={8}>
                <Col sm={8}>
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="holder.js/100px180" />
            </Card><br></br>
            <Card>
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="holder.js/100px180" />
            </Card> 
            </Col>
            </Row>
           
        </Container>  
        </div>
    )
}

export default Projects;
