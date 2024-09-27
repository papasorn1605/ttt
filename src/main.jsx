// main.jsx หรือ index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // เปลี่ยนการนำเข้าเป็นจาก react-dom/client
import App from './App';
import './index.css';

const rootElement = document.getElementById('root'); // สมมุติว่า id ของ div ที่จะเรนเดอร์คือ 'root'
const root = ReactDOM.createRoot(rootElement); // ใช้ createRoot แทน render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
