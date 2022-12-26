import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const users = [
    {
      name: "Sethu",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Um8cYinLpQ9vPBUerzsWf2kApxrF38iWgw&usqp=CAU"
    },
    {
      name: "Resvanth✔",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6eQppcP6_F1F7ji-mfmlZK4kDKztrktR4g&usqp=CAU"
    },
    {
      name: "Varunya",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYr4CcfLo-IfFqPgnocAr1bVdEQULTuIRFw&usqp=CAU"
    }
  ]
  return (
    <div className="App">
      {/* {users.map((tt) => (
        <User name={tt.name} pic={tt.pic} />
      ))} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      {/* <Add5 /> */}

    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Welcome to Movie app</h1>
    </div>
  )
}
function User({ name, pic }) {
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h1>hello, <span className='usr-name'>{name}</span> </h1>
    </div>
  )
}

function Add5() {
  let [num, stNum] = useState(10)
  return (
    <div>
      <button>+5</button>

    </div>
  )
}




export default App;
