import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import {
        Col,
        Row,
        } from 'react-bootstrap';

import Image from './Image';



const Kard = styled(Card)`
&:hover{
  box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
  -webkit-animation: 2s 0.2s fadeInUp both;
  animation: 2s 0.2s fadeInUp both;
}
  margin-bottom:25px; 
  border-radius: 15px;
  padding: 0px;
  overflow: hidden;
`;

const CardTitle = styled.h1`
  font-size: 15px;
  text-transform: uppercase;
  margin: 0.7rem 0 0.5rem;
  min-height: 45px;
  font-weight: bold;
  font-family: "Futura-bold";
  color: #626262;
`;

const Text = styled.p`
  margin-right: 0 !important;
  font-weight: bold;
  line-height: 20px;
  font-size: 15px;
  font-family: 'futuramedium';
  color: #9F9F9F;
`;

const MainTitle = styled(CardTitle)`
    font-size: 32px;
    color: #000;
    text-transform: capitalize;
    letter-spacing: 1px;
`;

const ImageHolders = styled.div`
  display: block;
  overflow: hidden;
  height: 150px;
`;

function Articlelist({articles, column, name}) {
  console.log(process.env.PUBLIC_UR + 'index.html');
  return (
      <Row xs={1} md={column} className="pt-3 pb-5">
     {name ? <Col md={12}><MainTitle>{name}</MainTitle></Col> : ""}

        {
          articles.map((article, key) => (
              <Col key={key} >
                <Link to={`/article/${article.name}`} className="article-list-item">
                    <Kard>
                      <ImageHolders>
                      {/* <img src={Pic} alt="safaricom" width="100%"/> */}
                      <Image pic={article.banner} />
                      </ImageHolders>
                      <Card.Body>
                        <CardTitle>{article.title}</CardTitle>
                        <Text>
                        {article.content[0].substring(0 , 150)}.... read more
                        </Text>
                      </Card.Body>
                  </Kard>
                </Link>
              </Col>
          ))
        }
      </Row>
  )
}

export default Articlelist;