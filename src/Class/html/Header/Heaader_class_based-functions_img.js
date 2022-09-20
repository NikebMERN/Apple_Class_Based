import React, { Component } from 'react'

class Header_class_based_img extends Component {
  render() {
    return (
        <li className="nav-item" ><a className="nav-link js-scroll-trigger" href={this.props.linkUrl}><img src={this.props.img} alt="" /></a></li>
    )
  }
}

export default Header_class_based_img;