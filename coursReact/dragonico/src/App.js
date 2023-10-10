import './App.css';
import Dragon from './Dragon';
import {useState} from 'react';
import Header from './Header';

function App() {
  const [darkmode, setDarkmode]= useState(false)

  const dragon = [ 
    {name:"Saphira", type:"Nature"},
    {name:"Denver", type:"Dino"},
    {name:"Eliot", type:"Ciel"}
  ]

  const handleClick = ()=>{
    setDarkmode(!darkmode);
  }
  return (
    <div className="App" style={ darkmode?({background : "black", color:"white"}) : ({background: "blue"})}>
      <Header/>
      {
        dragon.map((el, index) => {
          return <Dragon name={el.name} type={el.type} key={index}/>
        })
      }
    </div>
  );
}

export default App;
