import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import colors from './styles/themes/variables'

import Loading from './components/Loading'

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const Home = lazy(() => import('./pages/Home'))
const Countries = lazy(() => import('./pages/Countries'))
const Details = lazy(() => import('./pages/Details'))
const About = lazy(() => import('./pages/About'))

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
`

function App() {
  return (
    <ThemeProvider theme={colors}>
      <Router>
        <Suspense
          fallback={
            <Loader>
              <Loading />
            </Loader>
          }
        >
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/details/:name' element={<Details />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </Suspense>
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  )
}

export default App
