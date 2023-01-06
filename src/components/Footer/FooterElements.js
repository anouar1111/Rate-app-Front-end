import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const FooterContainer = styled.footer`
    background-color: #787A91;
`
export const FooterWrap = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLink = styled(Link)`
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;

    &:hover{
        color: #15a2cd;
        transition: 0.3s ease-out;
    }
`
export const End = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const EndWrap = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto 0 auto;


`

export const RateLogo = styled.img`
    width: 100px;
    justify-self: start;
    cursor: pointer;
    display: flex;
    align-items: center;

`

export const WebsiteRight = styled.small`
    color: #fff;
    align-items: center;    
`
export const WebsiteInformation = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto 0 auto;
    display:inline;   
`

export const LinkedinIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    margin: auto;
`

export const LinkdinIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    align-items: center;
    margin: auto;
`
export const Owner = styled.small`
    color: #fff;
    align-items: center;
`