
 import React, {useState} from 'react';
 import {Plants} from './data';
 
 export const Card:React.FC<Plants> = ({title, description, quantity, imgURL}) => {
      
     const [plantQuantity, setPlantQuantity] = useState<number>(quantity);
 
     const addPlant = () => {
          setPlantQuantity((previousQuantity) => previousQuantity+1);
     }
 
     const removePlant = () => {
          setPlantQuantity((previousQuantity) => previousQuantity-1);
     }
     
     return <div>
          <div className='infoPlant'>
               <h1>{title}</h1>
               <h2><p>{description}</p></h2>
               <div className='infoPlantTwo'>
                    <img className='img' src={imgURL} alt={title} />
                    <div>
                         <h5 className='counter'>{ plantQuantity <= 0 ? 'No hay plantas disponibles ': 'Contamos con: ' }{ plantQuantity }</h5>
                        
                         <button className='button' onClick={()=>addPlant()}>+</button>
                         <button className='button' onClick={()=>removePlant()}>-</button>
                    </div>
               </div>
          </div>
     </div>
 }
