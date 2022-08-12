import styled from "styled-components"
import {FaBars} from "react-icons/fa"

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
/* 
    position: fixed;
    right: 0;
    left: 0; */
    
    height: 3em;
    padding: 0 1em;
    background-color: var(--clr-white);
`
export const Logo = styled.h1`
    font-size: var(--fs-m);
    font-family: var(--ff-poiret);

    width: 20%;
    min-width: fit-content;
    text-align: center;
    cursor: pointer;
`
export const Bar = styled(FaBars)`
    font-size: var(--fs-m);

    @media screen and (min-width: 30em){
        display: none;
    }
`
export const Links = styled.ul`
    display: flex;
    justify-content: space-evenly;
    gap: 1em;

    width: 20%;
    min-width: fit-content;
    @media screen and (max-width: 30em){
        display: none;
    }
`
export const LinksLi = styled.li`
    button {
        cursor: pointer;
        background: none;
        border: none;

        border:2px solid var(--clr-dark-grey);
        padding:5px 15px;
        border-radius: 10px;

        font-size: var(--fs-xs);

        &:hover {
            transform: scale(1.05);
            transition: transform 200ms solid;
        }
    }
`