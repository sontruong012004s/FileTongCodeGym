import logo from './logo.svg';
import './App.css';
let x = 10;
let list = ['Hello', 'Hehe', 'Haha'];
let obj = {
  name: 'A',
  score: 10,
  age: 20
}
let list0 = [
  {
    name: 'A',
    score: 10,
    age: 10
  },
  {
    name: 'A',
    score: 8,
    age: 20
  },
  {
    name: 'A',
    score: 9,
    age: 15
  }
]
function App() {
  return (
    <>
      <h1>{x}</h1>
     {list.map(e => (
        <h2>{e}</h2>
      ))}

      <h2>{obj.name}, {obj.score}, {obj.age}</h2>

      {list0.map((e, index) => (
       <h2>{index}, {e.name}, {e.score}, {e.age}</h2>
      ))}
    </>
  );
}

export default App;
