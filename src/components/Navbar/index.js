import React, {useState, useEffect} from 'react';
/* import logo from "./logo.png"; */
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {Nav,
     NavbarContainer,
     NavLogo,
    MobileIcon,
    NavMenu, 
    NavItem,
    NavLinks
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToBottom();
    }

    return (
        <>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>RATE MY PARTNER</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={400} spy={true}
                            exact='true' offset={-70} 
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="see" smooth={true} duration={400} spy={true}
                            exact='true' offset={-70} >See ratings</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="add" smooth={true} duration={400} spy={true}
                            exact='true' offset={-70} >Add ratings</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;