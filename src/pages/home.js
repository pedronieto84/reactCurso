import React , { Component } from 'react';
import data from '../jsonData/data'
import SearchComponent from '../components/searchComponent';
import { Link  } from 'react-router-dom';


class HomePage extends Component {

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

        const removeAccents = (str) => {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } 
        
        const resetToAll = () => {
          return this.state.dataInitial
        }

        const filterStrings = (eachItem, value) => {
          const tagsAdded = ( eachItem.tags.length > 0 ) ? eachItem.tags.reduce(( a, b )=> a + ' ' + b ) : ' '
          const infoAdded = (eachItem.info.length > 0 ) ?  eachItem.info.reduce((a, b)=> a + ' ' + b) : ' '
          const stringAllTogether = `${tagsAdded} ${infoAdded} ${eachItem.title}`
          const stringWithoutAccents = removeAccents(stringAllTogether)
          return stringWithoutAccents.includes(value)
        }


        const filter = () => {
          return this.state.dataInitial.filter(( each ) => {
              return filterStrings(each, ev.target.value)
          })
        }

        this.setState({
          dataFiltered: ev.target.value ?  filter() : resetToAll()
        })
    }


  render (){
        console.log('render')
          let whatToShow;
          if(this.state && this.state.dataFiltered && ( this.state.dataFiltered.length > 0 ) ){
            whatToShow = this.state.dataFiltered.map((each) => {
                  console.log('each', each)
                  return (
                    <>
                      <li 
                        
                        key={ each.id.toString() } className="list-group-item text-center">

                        <Link to={`/${each.id.toString()}`}>{each.title}</Link>
                      </li>
                    </>
                  )
            })
        } else{
          whatToShow = ( <h1>No hi ha res</h1>)
        }
    return (
          <>
          <SearchComponent filterMethod={ this.filterMethod } />
          <div className="container">
          <div className="row">
            <div>
              <ul className="list-group">
              { whatToShow }
              </ul>
            </div>
          </div>
          </div>
          </>
         
    )
  }
  }

  export default HomePage