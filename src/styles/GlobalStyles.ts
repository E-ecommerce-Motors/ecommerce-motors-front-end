import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, button,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, select, text-area {
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Lexend', sans-serif;
    }
    body{
        background-color: var(--whiteFixed);
    }
    button{
        cursor: pointer;
    }
     input:-webkit-autofill {
    box-shadow: 0 0 0 30px #fff inset;

    }
    input:-webkit-autofill {
        -webkit-text-fill-color: #000 !important;
    }
    :root{

        /* ========   HEADING   ======== */
        --Heading-1-700: 700;
        --Heading-2-600: 600;
        --Heading-3-600: 600;
        --Heading-3-500: 500;
        --Heading-4-600: 600;
        --Heading-4-500: 500;
        --Heading-5-600: 600;
        --Heading-5-500: 500;
        --Heading-6-600: 600;
        --Heading-6-500: 600;
        --Heading-7-600: 600;
        --Heading-7-500: 500;
        
        
        --Heading-1-size: 44px;
        --Heading-2-size: 36px;
        --Heading-3-size: 32px;
        --Heading-4-size: 28px;
        --Heading-5-size: 24px;
        --Heading-6-size: 20px;
        --Heading-7-size: 16px;


        /* ========   TEXT   ======== */
        --body-1-400: 400;
        --body-1-600: 600;
        --body-2-400: 400;
        --body-2-500: 500;
        --button-big-text: 600;
        --button-medium-text: 600;
        --input-placeholder: 400; 
        --input-label: 500;


        --body-1-size: 16px;
        --body-2-size: 14px;
        --button-big-text-size: 16px;
        --button-medium-text-size: 14px;
        --input-placeholder-size: 16px; 
        --input-label-size: 14px;


        /* ========   COLORS   ======== */

        /* ====  BRAND ==== */
        --brand1: #4529E6;
        --brand2: #5126EA;
        --brand3: #B0A6f0;
        --brand4: #EDEAFD;

        /* ====  GREY ==== */
        --grey0: #0B0D0D;
        --grey1: #212529;
        --grey2: #495057;
        --grey3: #868E96;
        --grey4: #ADB5BD;
        --grey5: #CED4DA;
        --grey6: #DEE2E6;
        --grey7: #E9ECEF;
        --grey8: #F1F3F5;
        --grey9: #F8F9FA;
        --grey10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        /* ====  ALERT ==== */
        --alert1: #CD2B31;
        --alert2: #FDD8D8;
        --alert3: #FFE5E5; 

        /* ====  SUCESS ==== */
        --sucess1: #18794E;
        --sucess2: #CCEBD7;
        --sucess3: #DDF3E4;
        
        /* ====  RANDOM ==== */
        --random1: #E34D8C;
        --random2: #C04277;
        --random3: #7D2A4D;
        --random4: #7000FF;
        --random5: #6200E3;
        --random6: #36007D;
        --random7: #349974;
        --random8: #2A7D5F;
        --random9: #153D2E;
        --random10: #6100FF;
        --random11: #5700E3;
        --random12: #30007D;
    }
    
    
`;
