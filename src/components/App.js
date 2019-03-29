import React from 'react'
import Header from './Header.js'
import styled from 'styled-components'

const AppWrapper = styled.div`
  background-image: url('https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?cs=srgb&dl=background-cement-concrete-242236.jpg&fm=jpg');
  font-family: 'Roboto', sans-serif;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
const App = () => {
  return (
  <AppWrapper>
      <Header/>
  </AppWrapper> 
  )
}

export default App;
