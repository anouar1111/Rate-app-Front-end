import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=>(primary ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,95,121,1) 36%, rgba(0,212,255,1) 100%)' : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,95,121,1) 36%, rgba(0,212,255,1) 100%)')};
    white-space: nowrap;
    padding: ${({big})=>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=>(dark ? '#010606':'#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,169,198,1) 0%, rgba(0,212,255,1) 100%)' : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,169,198,1) 0%, rgba(0,212,255,1) 100%)')};
    }
`