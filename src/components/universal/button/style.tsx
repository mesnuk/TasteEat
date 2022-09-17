import {ButtonInterface, LinkInterface} from './ButtonType';


export const styleBtn = ({bgColor = '#E1B168', textColor='#000', height = 73, width=181, bgColorHover = 'inherit', colorHover = '#fff', colorBorder = '#E1B168'}: ButtonInterface | LinkInterface) => {
    return  `
    display: inline-block;
    
    height: ${height+'px'};
    background-color: ${bgColor};
    color : ${textColor};
    
    box-sizing: border-box;  
    border: 2px solid ${colorBorder};
    border-radius: 0px;
    padding: 20px 57px;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.2px;
    text-decoration: none;
    
      &:hover {
        background-color: ${bgColorHover};
        color: ${colorHover};
      }

    `;
}