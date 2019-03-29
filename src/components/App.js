import React from 'react'
import Header from './Header.js'
import styled from 'styled-components'

const AppWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`
const App = () => {
  return (
  <AppWrapper>
    <div>
      <Header/>
    </div>
  </AppWrapper> 
  )
}

export default App;