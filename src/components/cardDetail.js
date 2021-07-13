import {Link } from 'react-router-dom'
const CardDetailComponent = (props) => {
    
    return (
      < >

      <div className="jumbotron text-center">
  <h1 className="display-4">{props.title}</h1>
   <hr className="my-4" />

  <ul className="list-group list-group-flush">
            {
              props.info.map(( each, index )=> {
                  return (
                     <div key={ index.toString() }>
                      <li className="list-group-item"> { each }</li>
                    </div>
                  )
              })
            }
</ul>

<ul>
            {
                props.tags.map(( each, index )=> {
                  return (
                     <span  className="p-5" key={ index.toString() }>
                      <span className="badge badge-pill badge-info"> { each }</span>
                    </span>
                  )
              })
            }
 </ul>
    <img src={ props.img } />
    <p className="lead">
    
    <Link className="fixed-bottom btn btn-primary btn-lg" to={'/'}>Tornar</Link>
  </p>
</div>
       
    
      </>
      )
  }

  export default CardDetailComponent;