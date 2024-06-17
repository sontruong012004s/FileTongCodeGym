import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div>
      <h4>Browser's details: {navigator.userAgent}</h4>
    </div>
  );
};

root.render(<App />);
