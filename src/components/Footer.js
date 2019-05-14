import React from "react";
import {
    NavLink,
    Row,
    Col,
    NavItem,
    Nav
} from 'reactstrap';
import '../pages/style.css';

const Footer = () => {
    return (
        <Row>
            <Col sm="12" md={{ size: 8, offset: 1 }} id="footer-container">
                <Nav>
                <NavItem>
                    <NavLink className="nav-link" href="mailto:nikkipetersen.dev@gmail.com?Subject=GimmeAJob">email: nikkipetersen.dev@gmail.com</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" href="https://github.com/piknikki?tab=repositories">github: https://github.com/piknikki</NavLink>
                </NavItem>

               <NavItem>
                    <NavLink className="nav-link"  href="https://www.linkedin.com/in/nikkipetersencsm">linkedin: https://www.linkedin.com/in/nikkipetersencsm</NavLink>
               </NavItem>
                </Nav>
                <br/>
                Made by Nikki with 🧠 and 💜
            </Col>

        </Row>

    )
};

export default Footer;

