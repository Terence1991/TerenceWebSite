import React from 'react'
import {BrowserRouter, withRouter ,Route} from "react-router-dom"
import Contact from '../screens/Contact.js';
import Portfolio from '../screens/Portfolio.js'
import About from '../screens/About.js'
import Services from '../screens/Services.js'

class Header extends React.Component {
  state = {url: '/about', isPagedChanged: false}

  componentDidMount() {
   this.setState({isPagedChanged: true}) 
  }

 handleClickAbout = () => {
   let { history } = this.props
     history.push({
       pathname: "/about", 
       search:  null
     })
     setTimeout(function(){
      window.location.reload(1);
   }, 1000);
}
  handleClickHome = () => {
    let { history } = this.props
    history.push({
      pathname: '/',
      search: null
    })
    setTimeout(function(){
      window.location.reload(1);
   }, 1000);
  }

  handleClickPortfolio = () => {
    let { history } = this.props
    history.push({
      pathname: '/portfolio',
      search: null
    })
    setTimeout(function(){
      window.location.reload(1);
   }, 1000);
  }

  handleClickServices = () => {
    let { history } = this.props
    history.push({
      pathname: '/services',
      search: null
    })
    setTimeout(function(){
      window.location.reload(1);
   }, 1000);
  } 

  handleClickContact = (url) => {
    let { history } = this.props
    history.push({
      pathname: '/contact',
      search: null
    })
    setTimeout(function(){
      window.location.reload(1);
   }, 1000);
  } 

render() {
  console.log(this.state)
  return (
    <BrowserRouter>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/portfolio" exact component={Portfolio}/>
      <Route path="/about" exact component={About}/>
      <Route path='/services' exact component={Services}/>
      <button onClick={this.handleClickHome.bind(this)}>Home</button>
      <button onClick={this.handleClickAbout.bind(this.state.url)}>About</button>
      <button onClick={this.handleClickPortfolio.bind(this)}>Portfolio</button>
      <button onClick={this.handleClickServices.bind(this)}>Services</button>
      <button onClick={this.handleClickContact.bind(this)}>Contact</button> 
    </BrowserRouter> 
  )
  }
}
export default withRouter(Header);