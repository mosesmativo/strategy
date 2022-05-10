import React from 'react';
import styled from 'styled-components';
import {Col} from  'react-bootstrap';

const Input = styled.input`
    padding: 6px 15px;
    box-shadow: 0px 2px 4px 0px #00000017;
    border-radius:15px;
    margin-bottom: 1.5rem;
    min-width: 400px;
    text-align: center;
    color: #000;
    font-family: 'futuramedium';
    letter-spacing: 1px;
    background:#ffffff;
    border:1px solid transparent;
    transition: all linear 0.6s;
    &:focus{
        border: 1px solid #2da736;
        box-shadow: none;
        outline: none;
    }
`;

function Search({data}) {
  return (
    <>
    <Col className="text-center">
      <Input type="text" className="search" placeholder="Search..."/>
    </Col>
        
    </>
  )
}

export default Search;