import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let a = 15;
  const firstName = "Zeynep";
  let vize1 = 60;
  let vize2 = 50;
 
  let sonuc = true;
  
 return (
    
      <div>
       <p> musterinin adi : {firstName} </p>
       <p> a degeri : {a} </p>
       <p>Ortalama: {( vize1 + vize2) / 2 }</p>
       { sonuc ? <p> Dersi gectiniz </p> : <p> Kaldiniz</p>}
      </div>
      // suslu parantez icine yazian degiskeni atar .
      //eger "a degiskeninin degeri : a" seklinde yazsaydik string olarak alip a degiskeninin degeri : a ciktisi veriridi.
      // ? ...... : ..... if else demek 
  )
}

export default App
