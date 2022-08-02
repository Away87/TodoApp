import React from 'react'
import { Container, Links, LinksLi, Logo, Bar } from "./NavbarElements"

const Navbar = () => {
  return (
    <>
    <Container>
        <Logo>WorkSpace</Logo>
        <Bar/>
        <Links>
            <LinksLi><button>Login</button></LinksLi>
            <LinksLi><button>Register</button></LinksLi>
        </Links>
    </Container>
    </>
  )
}

export default Navbar