import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Strip = styled.div`
    background-color: #2da736;
    color: #fff;
    padding: 1rem 0 0;
    font-family: "futuramedium";
    letter-spacing: 1px;
    font-size: 15px;
`;

function Footer() {
  return (
    <Strip>
        <Container>        
            <p>Copyright Reserved: Safaricom strategy Board 2022</p>
        </Container>

    </Strip>
  )
}

export default Footer;