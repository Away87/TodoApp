import React, {useState} from 'react'
import { useInterval } from 'usehooks-ts'
import { Container, Links, LinksLi, Logo, Bar } from "./NavbarElements"
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'
import MobileNavbar from '../MobileNavbar'


const Navbar = () => {
  const [SidebarState, setSidebarState] = useState(false);

  return (
    <>
    <Container id='navbar--container'>
        <Logo><Link to={Paths.home}>WorkSpace</Link></Logo>
        <MobileNavbar state={SidebarState} disableParent={()=>setSidebarState()}/>
        <Bar onClick={()=>{
          setSidebarState(true)
        }} />
        <Links>
            <LinksLi><Link to={Paths.login}> <button>Login</button></Link></LinksLi>
            <LinksLi><Link to={Paths.register}> <button>Register</button></Link></LinksLi>
        </Links>
    </Container>
    </>
  )
}

export default Navbar