import styled from "styled-components";
import {InputProps} from "../types/input.ts";

export const StyledInput = styled.input<InputProps>`
    display: ${props => props.isHidden ? "none" : "block"}; /* 0 -> 100% */
    width: ${props => props.isHidden ? "0" : "100%"};
    padding: ${props => 
		props.noImage ? "0.6944vw 1.736vw 0.6944vw 1.736vw" :
			props.isHidden ? "0" : "0.6944vw 5.138vw 0.6944vw 1.736vw"}; /* 0 -> 10px 74px 10px 25px -> 0.6944vw 5.138vw 0.6944vw 1.736vw */
  
    ${props => props.variant && `
        background-color: #FFFFFF;
        box-shadow: none;
        border: 1px solid #8C8C8C;
        caret-color: #8C8C8C;
        color: #8C8C8C;

        &:focus {
            box-shadow: none;
        }

        &::placeholder {
            color: #8C8C8C;
        }
    `}
  
    ${props => (props.variant === "transparent" || props.variant === "transparent-next" || props.variant === "transparent-checked") && `
        background-color: transparent;
        box-shadow: none;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        caret-color: #FFFFFF;
        padding: 0.6944vw 3.6vw 0.6944vw 1.736vw;
        
        &:focus {
          box-shadow: none;
        }      
                
        &::placeholder {
            color: #FFFFFF;
        }
    `}
  
    ${props => props.variant === "warning" && `
        background-color: transparent;
        box-shadow: none;
        border: 1px solid #F77474;
        color: #FFFFFF;

        &:focus {
          box-shadow: none;
        }

        &::placeholder {
            color: #F77474;
        }
    `}
  
`;
