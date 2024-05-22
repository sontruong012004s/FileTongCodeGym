import logo from "./logo.svg";
import './App.css';
let names = ['NA', 'NAL', 'C05'];
let x = 110;

let obj = {
  name: 'NAA',
  age: 20
}
let listProduct = [
  {
      id: 1,
      name: 'A',
      price: 10,
      quantity: 5
  },
  {
      id: 2,
      name: 'AB',
      price: 12,
      quantity: 2
  },
  {
      id: 3,
      name: 'C',
      price: 15,
      quantity: 3
  }
]
function App() {
  return (
    <>
      <h1>Hello {x}</h1>
      {
        names.map(item => {
          <h2>{item}</h2>
        })
      }
      <h2>{obj.name}, {obj.age}</h2>
      {listProduct.map(product => (
        <h3 key={product.id}>
          {product.id}, {product.name}, {product.price}, {product.quantity}
        </h3>
      ))}
    </>
  );
}

export default App;
