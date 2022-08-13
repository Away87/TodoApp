import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* CSS Reset */
    html, body, div, span, applet, object, iframe,
    blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* Css Reset Ends */

    /* Css variables */
    :root {
        --clr-pink : rgba(229,92,138,255);
        --clr-grey : rgba(60,66,74,255);
        --clr-dark-grey : rgba(52,58,64,255);
        --clr-white: #fff;
        --clr-black: #000;

        --ff-roboto : 'Roboto Slab', serif;
        --ff-ubuntu: 'Ubuntu', sans-serif;
        --ff-poiret: 'Poiret One';

        --fs-xs: clamp(0.9rem, 1vw + 0.05rem, 2rem);
        --fs-s: clamp(1.2rem, 1vw + 0.05rem, 3rem);
        --fs-m: clamp(2rem, 1vw + 0.05rem, 4rem);
        --fs-l: clamp(3rem, 1vw + 0.05rem, 7rem);
    }
    /* Css variables Ends */

    /* Global Styles */
    body {
        font-size: var(--fs-s);
        font-family: var(--ff-ubuntu);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    /* Global Styles Ends */
`