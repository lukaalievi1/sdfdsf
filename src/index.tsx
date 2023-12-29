import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fetch from './pages/fetch';
import Todo from './pages/todo';
import Post from './pages/post';
import App from './App';

const MainApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);