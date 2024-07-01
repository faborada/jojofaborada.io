import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import  './pages/Style/All.min.css';
import  './pages/Style/mobile.min.css';
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Offer from './pages/Offer';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="experience" element={<Experience />} />
			<Route path="offer" element={<Offer />} />
			<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
