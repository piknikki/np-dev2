import React from "react";
import './style.css';
import {
    Row,
    Col,
    Container
} from 'reactstrap';

function Interests() {
    return (
        <section id="fix-this">
            <Container className="interests-container">
                <h1>My interests</h1>
                <Row>
                    <Col>
                        <ul>
                            <li><h4>Coffee</h4><span>It's what makes me human. I try not to overindulge because it freaks me out.</span></li>
                            <li><h4>Kids</h4><span>They're a lot of work, but when you've survived a decade with them, it says something about you.</span></li>
                            <li><h4>Creating</h4><span>I like to make stuff, using yarn, wool, wood, sugar, and all manner of baking supplies.</span></li>
                            <li><h4>Colorado</h4><span>I've lived in a handful of states, but this will always be the most comfy cozy.</span></li>
                        </ul>
                    </Col>

                    <Col>
                        <ul>
                            <li><h4>Bikes</h4><span>I'm not a cyclist by any means; I prefer to meander and enjoy the outdoors slowwwwwly.</span></li>
                            <li><h4>Outdoors</h4><span>Speaking of which, I like to get out for camping, sun, walks, and the sounds of nature.</span></li>
                            <li><h4>Nerding</h4><span>I'm a nerd of various degrees and thoroughly enjoy nerding about.</span></li>
                            <li><h4>Floofy Bois</h4><span>Cats are the reason the internet exists, and my two cats are exemplary specimens.</span></li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Interests;
