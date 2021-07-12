import './App.css';
import React from 'react'
import ClassComponent from './components/classComponent';


class App extends React.Component {

  constructor(){
    super()
    this.state = { data: 0 , showChild: true  }
  }

  render (){

    let componentChild;

    if(this.state.showChild) {
      componentChild =    <ClassComponent  data={this.state.data} />
    }

    return (
          <>
    <h2>Total: { this.state.data }</h2>
    <button onClick={()=>{ this.setState({ showChild: !this.state.showChild  }   )}}> eliminar component</button>

    { componentChild }
  
    </>
    )
  }
}

export default App;
