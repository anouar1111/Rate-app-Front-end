import styled from 'styled-components';
import{FaUser, FaRegStar, FaStar} from 'react-icons/fa';

export const SearchContainer = styled.div`
    color : #fff;
    background : #787A91;


    @media screen and (max-width: 760px){
        padding: 180px 0;
    }
`

export const SearchWrapper = styled.div`
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

export const SearchRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
`

export const Heading = styled.p`
    color : #0f6883;
    font-size: 30px;
    line-height: 26px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`

export const IconName = styled(FaUser)`
    width: 50px;
    font-size: 2rem;
    color: black;
    float: left;
`;

export const Text = styled.input`
    border-radius: 30px;
    padding-right: 20px;
    padding-left: 10px;
    outline-width : 0;
    width: 250px;
    height: 40px;
    float:left; 
    display:inline; 
    border-style: solid;
    border-width: 3px;
    border-color: #0f6883;
`

export const BtnWrap = styled.div`
    justify-content: flex-start;
    float:left; 
    display:inline; 
    width: 100px;
    margin-left: 10px;
`

export const SearchWrap = styled.div`
    justify-content: center;
    margin-bottom: 650px;
    margin-left: auto;
    margin-right: auto;
`
export const SearchBox = styled.div`
    justify-content: center;
`

export const SearchResultBox = styled.div`
    margin-top: 80px;
    position: absolute;
    justify-content: center;
    height: 550px;
    overflow-y: auto;
    margin-left: -10px;
`

export const DIV = styled.div`
    justify-content: center;
    color : #000000;
    font-size: 13px;
    width: 400px;
    height: auto;
    border: 1px solid black;
    margin: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fafafa;
    box-shadow: 0 0 2px 2px #15a2cd;
`

export const HRate = styled.div`
    margin-bottom: 10px;
    margin-top: 5px;
`
export const HInstitution = styled.span`
    margin-bottom: 10px;
    font-size: 0.85714rem ;
    color: #777;
`
export const HComment = styled.p`
    margin-top: 10px;
`

export const Checked = styled(FaStar)`
    
`
export const Unchecked = styled(FaRegStar)`
    
`

/*


                        {partnerRateList.map((val,key)=>{
                            return <DIV>{val.name}</DIV>;
                        })};
*/