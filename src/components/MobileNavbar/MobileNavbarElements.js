import styled from "styled-components";

import {AiOutlineClose} from "react-icons/ai"

export const Overlay = styled.div`
    height: 100%;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-index-100);
    background-color: rgba(0,0,0,0.5);

    transform: ${props=>props.visible? "translateX(0%)":"translateX(-100%)"};
    opacity: ${props=>props.visible? 1 : 0};
    transition: opacity 300ms solid;
`

export const Container = styled.div`
    height: 100%;
    width: 60%;
    background-color: var(--clr-white);

    position: fixed;
    right: 0;
    top: 0;
    z-index: var(--z-index-100);

    transform: ${props=>props.visible? "translate(0%)":"translate(100%)"};
    transition: transform 300ms ease-in;

    header {

        display: flex;
        justify-content: flex-end;
    }
`
export const Cross = styled(AiOutlineClose)`
    font-size: var(--fs-m);
    margin: 0.5em 0.5em 0 0;
    cursor: pointer;
`

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    margin-top: 2em;
    `
export const LinksLi = styled.li`
    width: 90%;
    margin: 0 auto;
    button {
        cursor: pointer;
        background: none;
        border: none;
        
        border:2px solid var(--clr-dark-grey);
        padding:10px 15px;
        border-radius: 10px;
        
        font-size: var(--fs-xs);
        width: 100%;
        max-width: 320px;
        min-width: 150px;
        
        &:hover {
            transform: scale(1.05);
            transition: transform 200ms solid;
        }
        
    }
`