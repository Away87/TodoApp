import React from 'react'
import { useInterval } from 'usehooks-ts'
import { Overlay, Container, Cross, Links, LinksLi } from './MobileNavbarElements'
import { Paths } from '../../paths'
import { Link } from 'react-router-dom'
const MobileNavbar = (props) => {
    useInterval(()=>{
        if (window.innerWidth > 480) props.disableParent(false)
    }, props.state ? 100 : null)

    const closeSidebar = ()=> props.disableParent(false)

  return (
    <>
    <Overlay visible={props.state}/>
    <Container visible={props.state} className="mobileNavbar">
        <header>
            <Cross onClick={closeSidebar}/>
        </header>
        <Links>
            <LinksLi><Link to={Paths.login}> <button onClick={closeSidebar}>Login</button></Link></LinksLi>
            <LinksLi><Link to={Paths.register}> <button onClick={closeSidebar}>Register</button></Link></LinksLi>
        </Links>
    </Container>
    </>
  )
}

export default MobileNavbar