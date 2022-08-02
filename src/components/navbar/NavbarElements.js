import styled from "styled-components"
import {FaBars} from "react-icons/fa"

export const Container = styled.nav`
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    justify-content: space-between;
    
    height: 6em;
    border: 2px solid red;
    padding: 0 1em;
    
`
export const Logo = styled.h1`
    font-size: var(--fs-l);
    font-family: var(--ff-poiret);
    border: 2px solid pink;

    width: 20%;
    min-width: fit-content;
    text-align: center;
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

    border: 2px solid red;
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

        font-size: var(--fs-s);

        &:hover {
            transform: scale(1.05);
            transition: transform 200ms solid;
        }
    }
`