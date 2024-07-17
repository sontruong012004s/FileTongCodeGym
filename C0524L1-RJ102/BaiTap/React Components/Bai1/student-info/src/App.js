import React from 'react';
import StudentInfoComponent from './StudentInfoComponent';
import './App.css';

const students = [
  { id: 1, name: 'Nguyen Van A', age: 20, address: '123 Le Loi, Da Nang' },
  { id: 2, name: 'Tran Thi B', age: 21, address: '456 Tran Phu, Hue' },
  { id: 3, name: 'Le Van C', age: 22, address: '789 Nguyen Trai, Ha Noi' },
];

const App = () => {
  return (
    <div className="App">
      <StudentInfoComponent students={students} />
    </div>
  );
};

export default App;
