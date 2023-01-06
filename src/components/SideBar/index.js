import React from 'react';
import {SideBarContainer,Icon, CloseIcon, SideBarWrapper,
SideBarMenu,SideBarLink}from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="see" onClick={toggle}>See ratings</SideBarLink>
                    <SideBarLink to="add" onClick={toggle}>Add ratings</SideBarLink>
                </SideBarMenu>

            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
