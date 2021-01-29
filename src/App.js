import logo from './logo.svg';
import * as React from 'react'; 
import './App.css';

const { useState } = React; 

function App() {
  const [counter, setCounter] = useState(0); 

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p>Count: {counter}</p>
        </div>
        <button onClick = {() => {setCounter(counter + 1)}}>Click me... </button>
      </header>
    </div>
  );
}

export default App;
