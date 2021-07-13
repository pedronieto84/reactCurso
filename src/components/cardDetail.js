import React from 'react';


const CardDetailComponent = (props) => {
    
    const clickedCardDetail = ()=>{
      console.log('clicked card detail')
    }
    return (
      < >
        <div onClick={clickedCardDetail} className="card" >
            <div className="card-body">
            <h5 className="card-title">{props.info.title}</h5>

            {
              props.info.info.map(( each, index )=> {
                  return (
                     <div key={ index.toString() }>
                      <p> { each }</p>
                    </div>
                  )
              })
            }
            <p className="card-text">{props.info.info}</p>
            </div>
      </div>
    
      </>
      )
  }

  export default CardDetailComponent;