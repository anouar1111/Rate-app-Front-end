import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {BigContainer , BigBg , VideoBg,
BigContent, BigBtnWrapper, BigH1, BigP,ArrowForward, ArrowRight } from './BigElements';

const BigPart = () => {
    const[hover, setHover]= useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <BigContainer id="about"> 
            <BigBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </BigBg>
            <BigContent>
                <BigH1>
                    Rating Partner Made Easy
                </BigH1>
                <BigP>
                    Do you want to make sure that your future group partner is hard
                    working and serious before you start projects with him ? Or, Do you
                    want to rate a group partner that you worked with ? You are 
                    at the right website !
                </BigP>
                <BigBtnWrapper>
                    <Button to="add" smooth={true} duration={400} spy={true}
                            exact='true' offset={-70}  onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </BigBtnWrapper>
            </BigContent>
        </BigContainer>     
    )
}

export default BigPart
