import logo from './logo.svg';
import './App.css';

let name = ['A', 'B', 'C'];
let x = 100;
let obj = {
    name: 'hello',
    age: 20
  }

let list = [
  {
      id: 1,
      name: 'A',
      price: 10,
      quantity: 5
  },
  {
      id: 2,
      name: 'B',
      price: 30,
      quantity: 9
  },
  {
      id: 3,
      name: 'C',
      price: 200,
      quantity: 1
  }
]
function App() {
  return (
    <>
    <h1>Hello {x}</h1>
    {
      name.map(item => (
        <h2>{item}</h2>
      ))
    }
    <h2>{obj.name}, {obj.age}</h2>

    {
      list.map(x => (
       <h2>{x.id}, {x.name}, {x.price}, {x.quantity}</h2>
      ))
    }
    </>
  );
}

export default App;
