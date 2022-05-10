
import React from 'react';
import "./App.css";
import "./Customs.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from './pages/AboutUs';
import Articles from './pages/Articles';
import Navbar from "./NavBar";
import ArticlesListPage from './pages/ArticlesListPage';
import NotFound from './pages/NotFound';
import styled from 'styled-components';
import Footer from './components/Footer';

const Dapp = styled.div`
  height: 100%;
  background: #F2F2F2;
  min-height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <Dapp>
        <Navbar />
          <div id="page-body">
          <Routes>
              <Route path="/" element={<HomePage />} exact/>
              <Route path="/about/" element={<AboutUs />} />
              <Route path="/article-list/" element={<ArticlesListPage />} />
              <Route path="/article/:name" element={<Articles />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
          <Footer/>
      </Dapp>
    </BrowserRouter>
  );
}

export default App;
