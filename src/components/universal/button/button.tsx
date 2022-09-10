import React from "react";
import styled from "styled-components";
import {ButtonInterface} from './ButtonType';
import {styleBtn} from './style'


export  const Btn = (props : ButtonInterface ) : JSX.Element => {
    const style = styleBtn(props)
    const Button = styled.button` ${style}`;
    return   <Button >{props.innerText}</Button>;
 }
