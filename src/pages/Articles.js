import React from 'react';
import {useParams} from 'react-router-dom';
import Content from './article-content';
import ArticleList from '../components/Articlelist';
import NotFound from './NotFound';
import styled from 'styled-components';
import Image from '../components/Image';
import {
  Col,
  Row,
  Container,
  } from 'react-bootstrap';

const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  font-family: "Futura-bold";
`;

function Articles() {

 let params = useParams();
 
 const name = params.name;
 const article = Content.find(article => article.name === name);

    if(!article) return <NotFound />;

    const OtherArticles = Content.filter(article => article.name !== name);
  return (
    <>
    <Container className="pt-5">
            <Row xs={1} md={2}>
              <Col md={7}>
              <Image pic={article.banner}/>
                  <Title className="pt-4">{article.title}</Title>
                  {article.content.map((paragraph, key) => (
                      <p key={key}>{paragraph}</p>
                  ))}
              </Col>
              <Col md={1}></Col>
              <Col md={4} className="related-articles">
                <ArticleList articles={OtherArticles} name="Related Article"/>
              </Col>
            </Row>
        </Container>
    </>
  );
}

export default Articles;