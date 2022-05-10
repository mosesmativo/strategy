import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './safaricom-logo-green.png';
import styled from 'styled-components';

const Brand = styled(Link)`
    padding: 10px 0;
`;

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white p-0">
        <Container>
            <Brand to="/" className="main-logo">
                <img src={Logo} alt="safaricom" width="150"/>
            </Brand>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/article-list">Articles</Link>
            </li>
        </ul>
        </Container>
    </nav>
);

export default NavBar;