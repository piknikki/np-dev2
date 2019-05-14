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
                            <li><h4>Coffee</h4><p>It's what makes me human. I try not to overindulge because it freaks me out.</p></li>
                            <li><h4>Kids</h4><p>They're a lot of work, but when you've survived a decade with them, it says something about you.</p></li>
                            <li><h4>Creating</h4><p>I like to make stuff, using yarn, wool, wood, sugar, and all manner of baking supplies.</p></li>
                            <li><h4>Colorado</h4><p>I've lived in a handful of states, but this will always be the most comfy cozy.</p></li>
                        </ul>
                    </Col>

                    <Col>
                        <ul>
                            <li><h4>Bikes</h4><p>I'm not a cyclist by any means; I prefer to meander and enjoy the outdoors slowwwwwly.</p></li>
                            <li><h4>Outdoors</h4><p>Speaking of which, I like to get out for camping, sun, walks, and the sounds of nature.</p></li>
                            <li><h4>Nerding</h4><p>I'm a nerd of various degrees and thoroughly enjoy nerding about.</p></li>
                            <li><h4>Floofy Bois</h4><p>Cats are the reason the internet exists, and my two cats are exemplary specimens.</p></li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Interests;
