import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import Layout from './layout.js'
import theme from './theme.js'

const Home = lazy(() => import('./home.js'))
const Login = lazy(() => import('./login.js'))
const Nowhere = lazy(() => import('./nowhere.js'))

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/nowhere' element={<Nowhere />} />
            <Route path='/*' element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </Suspense>
    </ThemeProvider>
  )
}
