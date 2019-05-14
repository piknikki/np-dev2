import React from "react";
import {
    NavLink,
    Row,
    Col,
    NavItem,
    Nav
} from 'reactstrap';
import '../pages/style.css';

// import styled from "styled-components";
//
// const FooterStyle = styled.section `
//     ul {
//         text-align: center;
//         text-decoration: none;
//         list-style-type:none;
//         position: relative;
//         padding: 30px 0;
//     }
//     li {
//         display: inline-block;
//         font-size: 16px;
//         font-family: 'Cabin', sans-serif;
//         color: #5934f6;
//         text-decoration: none;
//         cursor: pointer;
//         margin-left: 1px;
//         margin-right: 6px;
//         padding-left: 10px;
//         padding-right: 10px;
//     }
//
//     li:hover {
//         border-left: 1px dotted #5934f6;
//         border-right: 1px dotted #5934f6;
//         margin-left: 0;
//         margin-right: 5px;
//         padding-left: 10px;
//         padding-right: 10px;
//     }
//
//     a {
//         text-decoration: none;
//     }
//
// `


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
            </Col>

        </Row>



//
// <Row>
// <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
// </Row>

    )

};

export default Footer;

// list-style-type: none;
