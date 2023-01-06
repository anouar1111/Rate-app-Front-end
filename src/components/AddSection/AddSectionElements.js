import styled from 'styled-components';
import{FaComment, FaUniversity, FaUser} from 'react-icons/fa';


export const AddContainer = styled.div`
    color : #fff;
    background : #EEEEEE;

    @media screen and (max-width: 760px){
        padding: 180px 0;
    }
`

export const AddWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const AddRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
`


export const Heading = styled.h1`
    color : #0f6883;
    font-size: 30px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: grid;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    
`

export const Name = styled.div`
    align-items: center;
    margin-left: -35px;
`

export const IconName = styled(FaUser)`
    width: 40px;
    font-size: 2rem;
    color: black;
    float: left;
`;





export const InputName = styled.input`
    border-radius: 30px;
    padding-right: 20px;
    padding-left: 20px;
    outline-width : 0;
    width: 350px;
    height: 40px;
    float: left;
    border-style: solid;
    border-width: 3px;
    border-color: #0f6883;

`


export const Institution = styled.div`
    align-items: center;
    margin-left: -35px;
`

export const IconInstitution = styled(FaUniversity)`
    width: 40px;
    font-size: 2rem;
    color: black;
    float: left;
`;


export const InputInstitution = styled.input`
    border-radius: 30px;
    padding-right: 20px;
    padding-left: 20px;
    outline-width : 0;
    width: 350px;
    height: 40px;
    float:left; 
    display:inline; 
    border-style: solid;
    border-width: 3px;
    border-color: #0f6883;
`

export const Rate = styled.div`
    align-items: center;
    margin-right: auto;
    margin-left: auto;
`




export const Comment = styled.div`
    align-items: center;
    margin-left: -35px;
`

export const IconComment = styled(FaComment)`
    width: 40px;
    font-size: 2rem;
    color: black;
    float: left;
`;


export const InputComment = styled.textarea`
    border-radius: 30px;
    padding: 20px 20px 20px 20px;
    outline-width : 0;
    width: 350px;
    height: 200px;
    float:left; 
    display:inline; 
    text-align: left;
    border-style: solid;
    border-width: 3px;
    border-color: #0f6883;
`

export const BtnWrap = styled.div`
    justify-content: flex-start;
    float:left; 
    display:inline; 
    width: 150px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
`


