import React from 'react'
import {BrowserRouter, withRouter ,Route} from "react-router-dom"
import Contact from '../screens/Contact.js';
import Portfolio from '../screens/Portfolio.js'
import About from '../screens/About.js'
import Services from '../screens/Services.js'

class Header extends React.Component {
 
  handleClick = (url) => {
   let { history } = this.props
     history.push({
       pathname: url, 
       search:  null
     })
     setTimeout(function(){
      window.location.reload(1);
   }, 1000);
}

render() {
  return (
    <BrowserRouter>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/about" exact component={About}/>
      <Route path='/services' exact component={Services}/>
      <button onClick={() => this.handleClick('/home')}>Home</button> 
      <button onClick={() => this.handleClick('/about')}>About</button>
      <button onClick={() => this.handleClick('/portfolio')}>Portfolio</button>
      <button onClick={() => this.handleClick('/services')}>Services</button>
      <button onClick={() => this.handleClick('/contact')}>Contact</button> 
    </BrowserRouter> 
  )
  }
}
export default withRouter(Header);