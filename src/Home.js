import React from 'react'
import "./Home.css";
import Jumbotron from 'react-bootstrap/Jumbotron';

import Card from 'react-bootstrap/Card'



function Home() {
 
return (
  <div id="home__Cont">
  <Jumbotron>
  <Card className="bg-dark text-white">
  <Card.Img src="./me.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
</Jumbotron>
</div>

    )
}

export default Home;