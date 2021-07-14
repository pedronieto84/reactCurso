import React  from 'react';
import { useParams } from 'react-router-dom';
import data from '../jsonData/data';
import CardDetailComponent from '../components/cardDetail';


const  CardDetailPage = ()=>  {
  
       const { title } = useParams();
       const myDoc = data.find( ( each ) => {
            return each.id === parseInt(title)
       })
        
 return (
        <>
          <CardDetailComponent 
           title={ myDoc.title }
           id={ myDoc.id }
           tags={ myDoc.tags }
           info={ myDoc.info }
           img={ myDoc.img }
           />
        </>
      )
  }

  export default CardDetailPage