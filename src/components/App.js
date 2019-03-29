import React from 'react'
import Header from './Header.js'
import Contact from '../screens/Contact.js'
import styled from 'styled-components'

const AppWrapper = styled.div`
  background-image: url('http://images.performgroup.com/di/library/sporting_news/30/47/eli-manning-101016-getty-ftrjpg_16avucspkz0ot1q6mz30veq348.jpg?t=-1372926513&w=960&quality=70');
  background-repeat: no-repeat;
  background-position: center center;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  width: 100vw;
`
const App = () => {
  return (
  <AppWrapper>
    <Header/>
    <Contact/> 
  </AppWrapper>
  )
}

export default App;
