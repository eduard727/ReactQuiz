
import React, { useState } from 'react';
import { PLANTS_DATA, Plants } from './data';
import { Card } from './Card';


function App(){
  
  const [plants, setPlans] = useState<Plants[]>(PLANTS_DATA);

  return(
    <div className='infoApp'>
      {plants.length>0 ? plants.map( (plant) => 
      <div key={plant.id}>
        <Card 
        title={plant.title} 
        description={plant.description} 
        imgURL={plant.imgURL} 
        quantity={plant.quantity} />
      </div>
      ): null }
    </div>
  );//fin de return
}

export default App;
