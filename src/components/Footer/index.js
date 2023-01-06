import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import Image from './logo.png';
import {FooterContainer,
FooterLink,
FooterLinkContainer,
FooterWrap,
End,
EndWrap,
RateLogo,
WebsiteRight,
WebsiteInformation,
LinkdinIconLink,
LinkedinIcon,
Owner
}from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLink to='/'>
                        Contact us
                    </FooterLink>
                </FooterLinkContainer>
                <End>
                    <EndWrap>
                        <RateLogo src={Image} />
                        <WebsiteRight>
                            Rate my partner © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRight>
                        <WebsiteInformation>
                            <Owner>
                            Developed by Anouar Smaili, using React.js and mySQL
                            </Owner>
                            <LinkedinIcon>
                                <LinkdinIconLink href="/" target="_blank"
                                aria-label="Linkedin">
                                    <FaLinkedin/>
                                </LinkdinIconLink>
                            </LinkedinIcon>
                        </WebsiteInformation>
                    </EndWrap>
                </End>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
