import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const firstName = "Zeynep";
  let vize1 = 60;
  let vize2 = 50;
 
  let sonuc = true;
  
 return (
    
      <div>
       <p> Ogrencinin adi : {firstName} </p>
       <p>Ortalama: {( vize1 + vize2) / 2 }</p>
       { sonuc ? <p> Zeynep dersi gectin </p> : <p> Kaldiniz</p>}
      </div>
      // suslu parantez icine yazian degiskeni atar .
      //eger "a degiskeninin degeri : a" seklinde yazsaydik string olarak alip a degiskeninin degeri : a ciktisi veriridi.
      // ? ...... : ..... if else demek 
  )
}

export default App
