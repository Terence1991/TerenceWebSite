import React from 'react'
import {withRouter, BrowserRouter, Route} from "react-router-dom"
import Contact from '../screens/Contact.js';
import Portfolio from '../screens/Portfolio.js'
import About from '../screens/About.js'
import Services from '../screens/Services.js'
import PropTypes from 'prop-types'
import { createBrowserHistory } from 'history';

class Header extends React.Component {
  state = {url: ''}

 handleClick = () => {
    this.state.history.pushState(null, '/about');
  }

render() {
  console.log(this.state)
  return (
    <BrowserRouter>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/about" exact component={About}/>
      <Route path='/services' exact component={Services}/>
       {/* <button onClick={this.handleClick('/')}>Home</button> */}
      <button onClick={this.handleClick}>About</button>
      {/* <button onClick={this.handleClick('/portfolio')}>Portfolio</button>
      <button onClick={this.handleClick('/services')}>Services</button>
      <button onClick={this.handleClick('/contact')}>Contact</button> */}
    </BrowserRouter> 
  )
  }
}
export default createBrowserHistory(Header);