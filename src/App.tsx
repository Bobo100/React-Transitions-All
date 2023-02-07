import React from 'react';
import './App.css';
import { Book } from './component/Book';
import { Flip } from './component/Flip';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import NotFoundPage from './pages/Error';

function App() {
  return (
    // <div className="App">
    //   <Book></Book>
    //   <Flip></Flip>
    // </div>
    <>
      <Router basename='/React-Transitions-All'>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/flip" element={<Flip />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
