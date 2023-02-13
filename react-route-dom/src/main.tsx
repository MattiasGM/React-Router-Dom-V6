import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { About } from './components/About';
import { Posts } from './components/Posts';
import { Redirect } from './components/Redirect';

import './styles/global.css';
import { Post } from './components/Post';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Posts />} /> */}
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<Post />} />
        </Route>
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
