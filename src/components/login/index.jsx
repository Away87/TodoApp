import React from 'react'
import { Link } from 'react-router-dom'
import Paths from '../../paths'
import { Main,Container, Form, Fieldset } from './LoginElements'

const LoginPage = () => {
  return (
    <>
    <Main>
      <Container className='SignInContainer'>
        <Form method='post' action='/'>
          <Fieldset>
            <h1>Login to your Account</h1>
            <p>Login using social networks</p>
          </Fieldset>
          <p>OR</p>
          <Fieldset>
            <input type="email" placeholder='Email' name='email' />
            <input type="password" placeholder='Password' name='pass'/>
            <button>Sign In</button>
          </Fieldset>
        </Form>
      </Container>

      <Container className='SignUpContainer'>
        <h1>New Here?</h1>
        <p>Sign up and discover a great amount of new opportunities to oragnize your works!</p>
        {/* <Link to={Paths.register}></Link> */}
        <button>Sign Up</button>
      </Container>
    </Main>
    </>
  )
}

export default LoginPage