import './App.css';
import React from 'react'
import data from './jsonData/data'
import CardDetailComponent from './components/cardDetail';
import SearchComponent from './components/searchComponent';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      data:[]
    };
  }

  componentDidMount(){
     const jsonData = data;
     this.setState({ dataInitial: jsonData, dataFiltered: jsonData })
  }

  filterMethod = (ev) =>{
        console.log('search changed', ev.target.value);
        this.setState({
          dataFiltered: this.state.dataInitial.filter(( each )=>{
              return each.b === ev.target.value
          })
        })
        
        
    }

  render (){
        console.log('render')
          let whatToShow;
          if(this.state && this.state.dataFiltered && ( this.state.dataFiltered.length > 0 ) ){
            whatToShow = this.state.dataFiltered.map((each) => {
                  console.log('each', each)
                  return (
                    <div key={ each.id.toString() } >
                      <CardDetailComponent info={ each } />
                    </div>
                  )
            })
        } else{
          whatToShow = ( <h1>No hay nada</h1>)
        }
    return (
          <>
          <SearchComponent filterMethod={ this.filterMethod } />
          { whatToShow }
          </>
         
    )
  }
}

export default App;
