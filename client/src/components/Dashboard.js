import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import './Home.css';


export default class Dash extends Component {
  render() {
    return (
      <Grid className="dashBoard">
        <Jumbotron>
   <h3><span>Re</span><span>create</span></h3>
          <p>Get recommendations on what you want to watch, play, read, or listen to!</p>
          <br />
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={3} className="pix-wrapper">
            <Image src="https://i.imgur.com/RjlRSVv.jpg" circle className="pix"/>
            <Link to="/watch">
            <h2 id="watch-link">Watch</h2>
            </Link>
            <p>Find your next favorite movie!</p>
          </Col>
          <Col xs={12} sm={3} className="pix-wrapper">
            <Image src="https://i.imgur.com/BAEZPfr.jpg" circle className="pix"/>
            <Link to="/play">
            <h2 id="play-link">Play</h2>
            </Link>
            <p>Find your next favorite video game!</p>
          </Col>
          <Col xs={12} sm={3} className="pix-wrapper">
            <Image src="https://i.imgur.com/liTmCEH.jpg" circle className="pix"/>
            <Link to="/read">
            <h2 id="read-link">Read</h2>
            </Link>
            <p>Find your next favorite book!</p>
          </Col>
                  <Col xs={12} sm={3} className="pix-wrapper">
            <Image src="https://i.imgur.com/k0UEify.jpg" circle className="pix"/>
            <Link to="/listen">
            <h2 id="listen-link">Listen</h2>
            </Link>
            <p>Find your next favorite artist!</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
