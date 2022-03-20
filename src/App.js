import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [nation, setNation] = useState (0);
  const {id, country, population, image} = data[nation];

  const previousNation = () => {
    setNation ((nation=>{
      nation--;
      if (nation<0) {return data.length-1}
      return nation
    }))
  }

  const nextNation =() => {
    setNation ((nation => {
      nation++;
      if (nation> data.length-1){nation=0}
      return nation
    }))
  }

  return (
    <div >
      <div className='container'>
      <h1> Countries in the world by population (2022)</h1>
      </div>

      <div className='container'>
      <img src={image} alt="pic" width='300px'height='200px' />
      </div>

      <div className='container'>
      <h2 className='country'> {id} - {country} </h2>
      </div>

      <div className='container'>
      <h2> Population - {population} </h2>
      </div>

      <div className='container'>
      <button onClick={previousNation}> Previous</button>
      <button onClick={nextNation} >Next</button>
      </div>

    </div>
  );
}

export default App;
