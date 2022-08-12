import React from 'react'
import MainImg from '../../images/home_main.jpg'
import { 
  Container,
  Img,
  TextArea,
  Heading,
  Paragraph
 } from "./HomeElements.js"

const HomePage = () => {
  return (
    <>
    <Container>
      
      <picture>
        <Img src={MainImg} alt="An girl preparing todo list."/>
      </picture>
      <TextArea>
        <Heading>next generation <span>work management</span></Heading>
        <Paragraph>
        Finally, organize your work and finish it within due time with world's #1 advanced todo app
        </Paragraph>
      </TextArea>
    </Container>
    </>
  )
}

export default HomePage