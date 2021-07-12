import React , { Component } from 'react';
import CardDetailComponent from './../components/cardDetail'

class HomeComponent extends Component {

    constructor(props){
        super(props);
      
    }

    render() {
        var numbers = [...Array(100).keys()];
        console.log('numbers', numbers)
      return (
          <>
              <div className="container">      
              <div className="row">
{
    numbers.map(el =>  (  <div className="col-sm" key={el} >
                <CardDetailComponent detail={el}/>
        </div>)
      
    
    )
              

}
         
            
            </div> 
             
              
              </div>
    

          </>
      )
    }
  }

  export default HomeComponent