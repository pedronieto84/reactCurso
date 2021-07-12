import React , { Component } from 'react';

class ClassComponent extends Component {

    constructor(){
          super()
          console.log('constructor')
          this.state = { valueTwice: 0 }
     }

    static getDerivedStateFromProps(props, state ){
        console.log('getDerivedStateFromProps')
        return {
          valueTwice: props.data * 2
        }
      }

      shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
      }

      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate', {prevProps, prevState})
        return null
      }

      componentDidUpdate(){
        console.log('component did update')
      }

      render() {
        console.log('render')
        return (
            <>
              <h1> State modificat al getDerivedStateFromProps: { this.state.valueTwice}   </h1>
            </>
        )
      }

    componentDidMount(){
      console.log('component did mount')
    }

    componentWillUnmount(){
      alert('Component està a punt de ser unmounted')
    }
  }

  export default ClassComponent