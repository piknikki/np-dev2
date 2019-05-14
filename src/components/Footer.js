import React from "react";
import {
    NavLink,
    NavItem,
    Container,
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
        <Container>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" href="mailto:nikkipetersen.dev@gmail.com?Subject=GimmeAJob">email</NavLink>
                </NavItem>
            <NavItem>
                <NavLink className="nav-link" href="https://github.com/piknikki?tab=repositories">github</NavLink>
            </NavItem>
                <NavItem>
                <NavLink className="nav-link"  href="https://www.linkedin.com/in/nikkipetersencsm/">linkedin</NavLink>
                </NavItem>
            </Nav>
        </Container>

    )

};

export default Footer;
