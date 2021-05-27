import React, { Component } from 'react'

class Welcocme extends Component {
    render(){
        return (
      <div>
            <h1>HELLO {this.props.name} a.k.a {this.props.heroName} </h1>
        {this.props.children}
      </div>
        )
    }
}
export default Welcocme;
