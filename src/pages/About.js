import React from "react";
import './style.css';

import {
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';

import './style.css';

function About() {
    return (
        <Container>
            <Row>
                <Col xs="auto" className="intro">
                    <h1>Hi.  I'm Nikki Petersen and I am a Full Stack Software Developer in the Denver area
                        who loves to create fun, beautiful, and useful web applications (and I believe passionately in
                        the Oxford Comma).  ((and donuts))</h1>
                    <h2>I started programming in 6th grade and recently rediscovered this passion. I seek a role as a
                        full stack developer at a company where I can learn, grow, and continue to master the craft.
                        So far, I have used the following: HTML/CSS, JavaScript, JQuery, Bootstrap, Node.js, Express, React,
                        Mongo/Mongoose, MySQL, Sequelize, Handlebars, EJS, and a handful of other random
                        packages/libraries/etc.</h2>
                    <h3>You can find a sampling of my projects on the "Work" page. This is my sandbox for experimentation
                        with code. I'm implementing the languages that I'm learning as I go. My next step is to learn
                        an iOS and Android language like Flutter and learn how to convert my SPAs to PWAs.</h3>
                </Col>

                <br/>
            </Row>
            <Row id="resume-container">
                <Col text-center="true" sm="12" md={{ size: 6 }} id="resume-box">
                    <h1><NavLink
                        className="nav-item nav-link"
                        id="navlink-resume"
                        href="https://github.com/piknikki/piknikki.github.io/blob/master/Nikki%20Petersen%20Resume.pdf" >My resume
                    </NavLink></h1>
                </Col>
            </Row>
        </Container>
    );
}

export default About;