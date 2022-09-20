import React, { Component } from 'react'

class Twice extends Component {
  // render() {
  //   const link = this.props.links;
  //   return (
  //       <c>
  //           {link.map((value, index) => {
  //               return(
  //               <li key={index}>
  //                   <a href='//'>{value}</a>
  //               </li>
  //           )}

  //           )}
  //       </c>
  //   )
  // }
  render() {
    if (this.props.links && Object.keys(this.props.links).length === 0) {
      return <h4>enter a blog entry to get started</h4>
    }
  
    return Object.keys(this.props.links).map(key =>
      <li>{this.props.links[key]}</li>
    )
  }
}

export default Twice;