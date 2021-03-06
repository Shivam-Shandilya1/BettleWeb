import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from "./Navbar";
import Content from "./Content" ;

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

