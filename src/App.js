import './style.css';
import bg from './image/bg-header-desktop.svg'
import Data from './data';
import { useState } from 'react';



function App() {
  const [lo,setlo]=useState('')


  return (
    
  <div className='back' >
    <div  >
    <img className='head'  src= {bg} alt=""/>


    <nav>
      <div className='pal' >
        <section>{Data[0].img}</section>
        
        <div className='cover' >
           <section className='pa' >
          <div>{Data.name}</div>
          <div><button className='pb' >{Data[0].cat}</button></div>
          <div><button className='pbb' > {Data[0].name} </button> </div>
           </section>

          <p  className='sen'  ><b> senior Frontend Devaloper </b></p>
          <p className='se' > 1d ago     <span className='span' > . Part Time   </span> <span className='span' > . Usa only    </span>     </p>
        </div>

        <section className='lastbutton' >
        <button className='button' >Frontend</button>
        <button className='button' >senior</button>
        <button className='button' >HTML</button>
        <button className='button' >CSS</button>
        <button className='button' >Javascript</button>

        </section>
      </div>
    </nav>
      
    </div>

  </div>
  );
}

export default App;
