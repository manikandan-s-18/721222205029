 
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import TopUsers from './components/TopUsers';  
import TrendingPosts from './components/TrendingPosts';  
import Feed from './components/Feed';  
import { Container } from '@mui/material';  

const App = () => {  
  return (  
    <Router>  
      <Container>  
        <Routes>  
          <Route path="/" element={<TopUsers />} />  
          <Route path="/trending" element={<TrendingPosts />} />  
          <Route path="/feed" element={<Feed />} />  
        </Routes>  
      </Container>  
    </Router>  
  );  
};  

export default App;  