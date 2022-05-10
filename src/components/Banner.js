import React from 'react';
import { Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Image from './Image';



const Heading = styled.h1`
    color: #000;
    font-size: 90px;
    letter-spacing: 5px;
    line-height: 90px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-family: "Futura-bold";
`;

const Sub = styled.span`
    font-family: 'Futura';
    font-size: 75px;
    display: block;
`;

const BannerText = styled.p`
    font-family: 'futuramedium';
    font-size: 17px;
    letter-spacing: 0.5px;
    color: #9F9F9F;
`;
const Scroll = styled(Link)`
    &:hover{
        color: #2CB34A;
    }
    font-family: 'futuramedium';
    color: #000;
    display: inline-block;
    padding-left: 10px;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 1rem;
    padding: 10px 0;
    letter-spacing: 0.8px;
`;
function Banner() {
  return (
    <Container>
    <Row xs={1} md={2} className="align-items-center pt-4 pb-4">
        <Col md={5}>
            <Heading><Sub>STRATEGY</Sub> BOARD</Heading>
            <BannerText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </BannerText>
            <Scroll to={'/about'}><i className="bi bi-mouse"></i> Scroll Down</Scroll>
        </Col>
        <Col md={7}>
            <Image pic={'banner-one.jpg'}/>
        </Col>
    </Row>
    </Container>
  )
}

export default Banner;