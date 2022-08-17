import styled from "styled-components"

export const Main = styled.main`
    height: var(--h-content);

    display: flex;
    justify-content: center;
    align-items:center ;

    @media screen and (max-width:40em) {
        flex-direction: column;
        justify-content: none;
    }
`
export const Container = styled.div`
    text-align: center;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    &.SignInContainer {
        width: 65%;
        background-color: var(--clr-white);
    }

    &.SignUpContainer {
        width: 35%;
        padding: 0 1em;
        background-color: var(--clr-pink); 
        color: var(--clr-white);

        flex-direction: column;
        gap: 1em;

        p {
            font-size: var(--fs-s);
            line-height: 1.5;
        }

        button {
            height: 3.2em;
            width: 90%;
            border: none;
            border-radius: 20px;
        }

    }

    @media screen and (max-width:40em) {
        &.SignUpContainer {
            display: none;
        }

        &.SignInContainer {
            width: 90%;
        }
    }
`
export const Form = styled.form`
    display: grid;
    gap: 1em;
    padding: 0 1em;
    max-width: 40em;
    
    p {
        font-size: var(--fs-xs);
    }

    & > p {
        position: relative;
        background-color: var(--clr-white);
        color:var(--clr-dark-grey);
        &::after {
            content: "";
            display: block;
            width: 46%;
            height: 1px;
            background-color: var(--clr-grey);
            position: absolute;
            top: 50%;
            left: 0;

            transform: translateY(-50%);
        }

        &::before {
            content: "";
            display: block;
            width: 46%;
            height: 1px;
            background-color: var(--clr-grey);
            position: absolute;
            top: 50%;
            right: 0;

            transform: translateY(-50%);
        }
    }
`
export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    color: var(--clr-grey);

    h1{
        text-transform: capitalize;
        word-spacing: 0.2em;
        font-size: var(--fs-l);
        color: var(--clr-dark-grey);
    }

    input {
        height: 3em;
        background-color: var(--clr-pink-light);
        border: none;
        padding-left: 1.2em;
        border-radius: 20px;
        color: var(--clr-grey);

        &::placeholder {
            color: var(--clr-grey);
        }

        &:focus{
            /* outline: 2px solid var(--clr-); */
            outline: none;
        }
    }

    button {
        height: 3.2em;
        width: 20em;
        border: none;
        border-radius: 20px;
        margin: 0 auto;
        background-color: var(--clr-pink);
        color: var(--clr-white);
        margin-top: 2em;
    }

    @media screen and (max-width:40em) {
        h1 {
            font-size: var(--fs-m);
        }
    }
`