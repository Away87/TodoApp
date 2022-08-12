import React, {useEffect} from 'react'
import { useInterval } from 'usehooks-ts'
import { Container, Links, LinksLi, Logo, Bar } from "./NavbarElements"
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

const Navbar = () => {

  // useInterval(()=>{
  //   const ContianerEl = document.querySelector("#navbar--container")
  //   window.scrollY > 15 ? ContianerEl.style.position = "fixed" : ContianerEl.style.position = "static"
  //   console.log(window.scrollY)
  // }, 100)
  return (
    <>
    <Container id='navbar--container'>
        <Logo><Link to={Paths.home}>WorkSpace</Link></Logo>
        <Bar/>
        <Links>
            <LinksLi><Link to={Paths.login}> <button>Login</button></Link></LinksLi>
            <LinksLi><Link to={Paths.register}> <button>Register</button></Link></LinksLi>
        </Links>
    </Container>
    </>
  )
}

export default Navbar