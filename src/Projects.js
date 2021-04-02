import React from 'react';
import "./Projects.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
    <div className="projectsContainer">
        <div id="projects__Div">
            <h1 className="projects__Text">Projects</h1>
        </div>
          <Container>
            <Row>
                <Col>
                <div class="projects card" style={{width: "80rem"}}>
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <br />
                <div class="projects card" style={{width: "80rem"}}>
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <br />
                <div class="projects card" style={{width: "80rem"}}>
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>


            </Col>
           </Row>
        </Container>  
        </div>
    )
}

export default Projects;
