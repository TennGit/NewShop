// @flow

import { css } from 'styled-components'

export const reset = () => css`
    /* Microsoft */

    input::-ms-clear, textarea::-ms-clear, select::-ms-expand {
      display: none;
    }
    
    select::-ms-value {
      background-color: transparent;
      color: $input-color;
    }
    
    /* Firefox */

    input[type='number'] {
      -moz-appearance: textfield !important;
    }
    
    button::-moz-focus-inner, input[type='reset']::-moz-focus-inner, input[type='button']::-moz-focus-inner, optgroup::-moz-focus-inner \{
      border: 0;
      padding: 0;
    }
    
    /* box sizing */

    html {
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-touch-callout: none;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    /* typography */

    embed, iframe, img, object, video {
      max-width: 100%;
    }
    
    h1, h2, h3, h4, h5, h6, ul, ol, dl, dt, dd, p, hr, img, form, fieldset {
      margin: 0;
      padding: 0;
      border: 0;
    }
    
  `
