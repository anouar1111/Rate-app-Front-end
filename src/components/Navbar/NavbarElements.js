import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav})=> (scrollNav ? '#000':'transparent')};
    height : 80px;
    margin-top: -80px;
    display : flex ;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index : 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display : flex;
    justify-content: space-between;
    height: 80px;
    z-index : 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: -20px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 150px;

    @media screen and (max-width : 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 5px solid #4ba9c6;
    }
` 

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    margin-top: 8px;
    width : 110px;
    border-radius: 50px;
    background : linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,95,121,1) 20%, rgba(0,212,255,1) 100%);
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,169,198,1) 0%, rgba(0,212,255,1) 100%);
        color: #010606;
    }
`

/* export const ImageLogo = styled.div`
    height:100px;
    margin-bottom: 1px;
    margin-left : 1px;
    position: fixed;
`
                    <ImageLogo>
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </ImageLogo>
*/