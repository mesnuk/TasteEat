import React from "react";
import styled from "styled-components";
import { LinkInterface} from './ButtonType';
import {styleBtn} from './style'

export const Link  = (props :  LinkInterface ) : JSX.Element => {
    const StyledLink = styled.a ` ${styleBtn(props)}`;
    return  <StyledLink href={props.href} >{props.innerText}</StyledLink>;
}