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
                    <h1>Nikki Petersen is a full stack software developer in the Denver area
                        who loves to create fun, beautiful, and useful web applications.</h1>
                    <h2>(and she believes passionately in the Oxford Comma)</h2>
                    <h3>((and donuts))</h3>
                </Col>

                <br/>
            </Row>
            <Row id="resume-container">
                <Col text-center="true" sm="12" md={{ size: 6 }} id="resume-box">
                    <h1><NavLink href="https://github.com/piknikki/piknikki.github.io/blob/master/Nikki%20Petersen%20Resume.pdf" >My resume
                    </NavLink></h1>
                </Col>
            </Row>
        </Container>
    );
}

export default About;