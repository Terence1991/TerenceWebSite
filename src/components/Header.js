import React from 'react'
import {withRouter, BrowserRouter, Route} from "react-router-dom"
import Contact from '../screens/Contact.js';
import Portfolio from '../screens/Portfolio.js'
import About from '../screens/About.js'
import Services from '../screens/Services.js'

class Header extends React.Component {
  handleClickH() {
    this.props.history.push('/')
}

render() {
  return (
    <BrowserRouter>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/about" exact component={About}/>
      <Route path='services' exact component={Services}/>
       <button onClick={this.handleClickH}>Home</button>
      <button onClick={this.handleclickA} >About</button>
      <button onClick={this.handleClickP}>Portfolio</button>
      <button onClick={this.handleClickS}>Services</button>
      <button onClick={this.handleClickC}>Contact</button>
    </BrowserRouter> 
  )
  }
}
export default withRouter(Header);