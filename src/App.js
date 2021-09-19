import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Family></Family>
      <Family></Family>

      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>


    </div>
  );
}

function Person() {
  const person = {
    backgroundColor: 'skyblue',
    border: '5px solid lightsalmon',
    margin: '20px',
    borderRadious: '20 px'
  }
  return (
    <div style={person}>

      <h1>Name: Sakib All Hasan</h1>
      <h4>Profession:Cricketer</h4>
    </div>

  );
}

function Family() {
  return (

    <div style={{
      backgroundColor: 'skyblue',
      border: '8px solid red',
      margin: '20px',
      borderRadious: '20 px'
    }}>
      <h1>wife: Shishir</h1>
      <h4>child:3</h4>
    </div>
  );
}



function Friend() {
  return (
    <div className="person">
      <h3>
        Phone:
      </h3>
    </div>
  )
}

export default App;
