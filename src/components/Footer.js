import React from "react";

import styled from "styled-components";

const FooterStyle = styled.section `
    ul {
        text-align: center;
        text-decoration: none;
        list-style-type:none;   
        position: relative;
        padding: 30px 0;
    }
    li {
        display: inline-block;
        font-size: 16px;
        font-family: 'Cabin', sans-serif;
        color: #5934f6;
        text-decoration: none;
        cursor: pointer;
        margin-left: 1px;
        margin-right: 6px;
        padding-left: 10px;
        padding-right: 10px;
    }
 
    li:hover {
        border-left: 1px dotted #5934f6;
        border-right: 1px dotted #5934f6;
        margin-left: 0;
        margin-right: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }
    
    a {
        text-decoration: none;
    }
    
`


const Footer = () => {
    return (
        <FooterStyle>
            <ul>
                <li><a href="mailto:nikkipetersen.dev@gmail.com?Subject=GimmeAJob">email</a></li>
                <li><a href="https://github.com/piknikki?tab=repositories">github</a></li>
                <li><a href="https://www.linkedin.com/in/nikkipetersencsm/">linkedin</a></li>
            </ul>
        </FooterStyle>

    )

};

export default Footer;