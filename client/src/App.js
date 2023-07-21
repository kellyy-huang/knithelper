import React from "react";
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    fetch("/home")
    .then((res) => res.json())
    .then((data) => counter);
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <Button variant="contained" onClick={() => setCounter(counter + 1)}>+</Button>
        <br></br>
        <Button variant="contained" onClick={() => setCounter(counter - 1)}>-</Button>
      </header>
    </div>
  );
}

export default App;
