import React from 'react'
import Navbar from './components/navbar'
import { 
  useRoutes,
  Outlet
 } from 'react-router-dom'
 import Paths from './paths'
import { GlobalStyles } from './GlobalStyledElements'
import LoginPage from './components/login'
import HomePage from './components/home'


const App = () => {
  return (
    <>
    <GlobalStyles/>
    
    <Navbar/>
  
    {
      useRoutes([
        {path:"/", element:<HomePage/>},
        {path:Paths.home, element:<HomePage/>},
        {path:Paths.login, element:<LoginPage/>},
        {path:"*", element:
        <>
          <main>
            <p  style={{textAlign: "center"}}>There's nothing here!</p>
          </main>
        </>
        },
      ])
    }
    <Outlet/>
    </>
  )
}

export default App
