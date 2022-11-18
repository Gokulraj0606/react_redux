
import './App.css';

function App() {
  const users = [
    {
      name: "sethu",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Um8cYinLpQ9vPBUerzsWf2kApxrF38iWgw&usqp=CAU"
    },
    {
      name: "resvanth",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6eQppcP6_F1F7ji-mfmlZK4kDKztrktR4g&usqp=CAU"
    },
    {
      name: "varunya",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYr4CcfLo-IfFqPgnocAr1bVdEQULTuIRFw&usqp=CAU"
    }
  ]

  return (
    <div className="App">
      {users.map((tt) => (
        <User name={tt.name} pic={tt.pic} />
      ))}

    </div>
  );
}
function User({ name, pic }) {
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name} />

      <h1>hello, <span className='usr-name'>{name}</span> </h1>
    </div>
  )
}

export default App;
