import React from 'react';
import { Button } from '../ButtonElement';
import { FaStar} from "react-icons/fa";

import {
    AddContainer,
    AddWrapper,
    AddRow,
    Heading,
    IconName,
    Name,
    InputName,
    IconInstitution,
    Institution,
    InputInstitution,
    Rate,
    IconComment,
    Comment,
    InputComment,
    BtnWrap
}from './AddSectionElements';
import {useState} from "react";
import Axios from 'axios';

const AddSection= () => {

    const [name , setName] = useState("");
    const [institution , setInstitution] = useState("");
    const [comment , setComment] = useState("");
    const [rate , setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const addPartner=()=>{
        Axios.post('https://rate-app-api.herokuapp.com/create', {
            name: name.toUpperCase(),
            institution: institution,
            rate: rate,
            comment: comment
        }).then(()=> {console.log("success");
        document.getElementById('name').value = '';
        document.getElementById('institution').value = '';
        setRating(0);
        document.getElementById('comment').value = '';
        window.alert("The informations have been successfuly submited");
    });
    };
    return (
        <>
            <AddContainer id="add" >
                <AddWrapper>
                    <AddRow>
                        <Heading> Rate a partner </Heading>
                        <Name>
                            <IconName></IconName>
                            <InputName id="name" onChange={(event)=>{
                                setName(event.target.value);}} 
                                placeholder="Partner Full Name"></InputName>
                           
                        </Name>
                        <Institution>
                            <IconInstitution></IconInstitution>
                            <InputInstitution id="institution"  onChange={(event)=>{
                                setInstitution(event.target.value);}} 
                                placeholder="Institution"></InputInstitution>   
                        </Institution>
                        <Comment>
                            <IconComment></IconComment>
                            <InputComment id="comment"  onChange={(event)=>{
                                 setComment(event.target.value);}} 
                                 placeholder= "Enter a comment..."></InputComment>
                        </Comment>
                        <Rate> 
                            {[ ...Array(5)].map((star,i) =>{
                                const ratingValue = i + 1;

                                return (
                                    <label>
                                        <input  className = "radio" 
                                                name="rate" 
                                                value={ratingValue} 
                                                onClick={()=>setRating(ratingValue)}
                                        />
                                        <FaStar className="star"
                                                size={60}
                                                color={ratingValue <= (hover || rate) ? "#ffc107" : "#787A91"}
                                                onMouseEnter={()=> setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                    
                                    );
                            })}  
                        </Rate>                        
                        <BtnWrap>
                            <Button onClick={addPartner} >Submit</Button>
                        </BtnWrap>
                    </AddRow>
                </AddWrapper>
            </AddContainer>
            
        </>
    )
}

export default AddSection;
