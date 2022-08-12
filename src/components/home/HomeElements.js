import styled from "styled-components"

export const Container = styled.div`
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
    
    @media screen and (min-width: 50em){        
        flex-direction: row-reverse;
        justify-content: space-evenly;
        align-items: center;
        height: calc(100vh - 3em);
    }
`

export const Img = styled.img`
    width: 100%;
    min-width: 300px;
    max-width: 30em;
`
export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    text-align: center;
    max-width: 20em;
    
    @media screen and (min-width: 50em){        
        width: 30%;
        text-align: start;
    }
`
export const Heading = styled.h1`
    text-transform: uppercase;
    font-size: var(--fs-m);
    /* color: var(--clr-white); */
    
    span{
        color: var(--clr-pink);
    }
    
    @media screen and (min-width: 50em){        
        font-size: var(--fs-m);
    }
`
export const Paragraph = styled.p`
    font-size: var(--fs-s);
    /* color: var(--clr-white); */
`
