import React from 'react';
import { Button } from '../ButtonElement';
import {useState} from "react";
import Axios from 'axios';

import {
    SearchContainer,
    SearchWrapper,
    SearchRow,
    Heading,
    SearchWrap,
    SearchBox,
    IconName,
    Text,
    BtnWrap,
    SearchResultBox,
    DIV,
    HRate,
    HInstitution,
    HComment,
    Checked,
    Unchecked
}from './SearchSectionElements';


const SearchSection = () => {
    const [partnerRateList, setPartnerRateList] = useState([]);
    const [nameEntered , setNameEntered] = useState("");

    const getPartnerRates = () => {
        Axios.post('https://rate-app-api.herokuapp.com/name', {
            nameEntered:nameEntered.toUpperCase()
        }).then(()=> {console.log(nameEntered);
        });

        Axios.get("https://rate-app-api.herokuapp.com/Partners",{
        }).then((response) => {
            setPartnerRateList(response.data);
            console.log(response);
        });

    };



    return (
        <>
            <SearchContainer id="see">
                <SearchWrapper>
                    <SearchRow>
                        <Heading>Search reviews about a partner </Heading>
                        <SearchWrap>
                            <SearchBox>
                                <IconName></IconName>
                                <Text id="nameEntered" onChange={(event)=>{
                                setNameEntered(event.target.value);}}  placeholder="Full Name"></Text>
                                <BtnWrap>
                                    <Button onClick={getPartnerRates}>Search</Button>
                                </BtnWrap>
                                <SearchResultBox>
                                {partnerRateList.map((val,key)=>{
                                    if (val.rate === 5){
                                        return  <DIV>
                                        <HRate>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                        </HRate>
                                        <HInstitution>Institution: {val.institution}</HInstitution>
                                        <HComment>{val.comment}</HComment>
                                    </DIV>; 
                                    }else if (val.rate === 4){
                                        return  <DIV>
                                        <HRate>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Unchecked></Unchecked> 
                                        </HRate>
                                        <HInstitution>Institution: {val.institution}</HInstitution>
                                        <HComment>{val.comment}</HComment>
                                    </DIV>; 
                                    }else if (val.rate === 3){
                                        return  <DIV>
                                        <HRate>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Unchecked></Unchecked> 
                                            <Unchecked></Unchecked> 
                                        </HRate>
                                        <HInstitution>Institution: {val.institution}</HInstitution>
                                        <HComment>{val.comment}</HComment>
                                    </DIV>; 
                                    }else if (val.rate === 2){
                                        return  <DIV>
                                        <HRate>
                                            <Checked></Checked>
                                            <Checked></Checked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked> 
                                        </HRate>
                                        <HInstitution>Institution: {val.institution}</HInstitution>
                                        <HComment>{val.comment}</HComment>
                                    </DIV>; 
                                    }else if (val.rate === 1){
                                        return  <DIV>
                                        <HRate>
                                            <Checked></Checked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked> 
                                        </HRate>
                                        <HInstitution>Institution: {val.institution}</HInstitution>
                                        <HComment>{val.comment}</HComment>
                                    </DIV>; 
                                    }else{
                                        return  <DIV>
                                        <HRate>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked>
                                            <Unchecked></Unchecked> 
                                        </HRate>
                                        <HInstitution>Institution: {val.institution}</HInstitution>
                                        <HComment>{val.comment}</HComment>
                                    </DIV>;                                         
                                    }
                                                                      
                                })}
                              
                                </SearchResultBox>
                            </SearchBox>   
                        </SearchWrap>  
                    </SearchRow>
                </SearchWrapper>
            </SearchContainer>
            
        </>
        /* TODO: Table search result  */
    )
}

export default SearchSection;
