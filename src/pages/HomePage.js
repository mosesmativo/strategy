import React from 'react';
import { Container } from 'react-bootstrap';
import Articlelist from '../components/Articlelist';
import Banner from '../components/Banner';
import articleContent from './article-content';

function HomePage() {
  return (
    <>
    <Banner />
    <Container fluid={true} className="bg-white pt-5 pb-5">
       <Container>     
       <Articlelist articles={articleContent} name={"Setting the scene"} column={4}/>
       <Articlelist articles={articleContent} name={"Our Purpose"} column={4}/>
       <Articlelist articles={articleContent} name={"Our Pillars"} column={4}/>
       <Articlelist articles={articleContent} name={"Enablers"} column={4}/>

       </Container>
    </Container>
    </>
  )
}

export default HomePage;