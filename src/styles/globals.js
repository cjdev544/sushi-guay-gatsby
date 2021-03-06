import React from 'react'
import { Helmet } from 'react-helmet'
import emotionNormalize from 'emotion-normalize'
import { css, Global } from '@emotion/core'
import colors from '../styles/colors'
import font from '../styles/fonts'
import size from '../styles/sizes'
import mq from '../styles/breakPoints'
import spaces from './spaces'

const Globals = () => { 
    return (
        <>
           <Helmet>
                <title>Sushi Guay</title> 
            </Helmet>

            <Global 
                styles={css`
                    /* Normalize */
                    ${emotionNormalize}

                    *,
                    *::before,
                    *::after {
                        box-sizing: border-box;
                    }

                    html {
                        font-size: 62.5%;                        
                        overflow-x: hidden; 
                    }
                    body {
                        font-family: ${font.firstFont};
                        font-size: ${size.base};
                        background-color: ${ colors.primary };
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    img {
                        max-width: 100%;
                    }
                    h1 {
                        font-family: ${font.secondFont};
                        font-size: ${size.title1};
                        line-height: 1.5;
                        margin: 0;

                        ${mq('max', 'medium')} {
                            font-size: ${size.title1Mobil};
                        }                        
                    }
                    h2 {
                        font-family: ${font.secondFont};
                    }
                    p {
                        margin: 0 0 20px;
                    }
                    a {
                        color: ${colors.accent};
                    }

                    /* Typography */
                    .title1 {
                        font-size: ${size.title1};
                        line-height: 1.5;
                    }
                    .title2 {
                        font-size: ${size.title2};
                        line-height: 1.1;
                        margin-bottom: 20px;   
                    }
                    .title3 {
                        font-size: ${size.title3};
                        line-height: 1.1;
                    }
                    .small {
                        font-size: ${size.small};
                        line-height: 1.5;
                    }
                    .smaller {
                        font-size: ${size.smaller};
                        line-height: 1.5;
                    }
                    .text-center {
                        text-align: center;
                    }

                    /* Spaces */
                    .container {
                        width: ${ spaces.width };
                        max-width: ${ spaces.maxWidth };
                        margin: 0 auto;
                    }
                    .spaceSectionDown { 
                        margin-bottom: ${ spaces.spaceSection };
                    }
                    .spaceSectionUp {
                        margin-top: ${ spaces.spaceSection };
                    }
                    .spaceTitle {
                        margin-bottom: ${ spaces.spaceTitle };
                    }
                    .backgroundNavegation {
                        background: linear-gradient(180deg, rgba(0,0,0,.8) 1%, rgba(0,0,0,.8) 70%,  rgba(0,0,0,.5) 100%);
                    }
                `}
            /> 
        </>
    )
}

export default Globals
