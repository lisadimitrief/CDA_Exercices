import React from 'react'
import Wrapper from '../Wrapper';
import {useState} from "react";

function Accueil() {
  const [isChecked, setIsChecked] = useState(false)

  const checking = ()=>{
    setIsChecked(!isChecked);
    console.log(isChecked);
  }
  return (
    <>
    <Wrapper>
      <input type="checkbox" onClick={checking}/>
      <p style={{ color: true ? 'blue' : 'red'}} >Lorem ipsum dolor sit amet.</p>
    </Wrapper>
    </>
  )
}

export default Accueil;