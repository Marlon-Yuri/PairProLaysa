import styled from "styled-components";

export const ContSub = styled.section `
    width: 100%;
    background-color: #DFE4DE;
`
export const Subscribe = styled.div `
    width: 100%;
    text-align:center;
    padding:8% 0% 2% 0%;
    color:#373737;
    h3{
        letter-spacing: 0.2vw;
        font-size: 2vw;
        @media (max-width:800px){
            font-size: 5vw;
            letter-spacing: 1vw;
        }
    }
    p{
        letter-spacing: 0.1vw;
        word-spacing: 0.3vw;
        @media (max-width:800px){
            font-size: 3.5vw;
            word-spacing: 1vw;
    }}
`
export const ContInp = styled.div `
    width: 100%;
    height: 43vh;
    padding-bottom: 10%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    input{
        width: 30%;
        border:none;
        padding: 1.5%;
        cursor: pointer;
        outline: none;
        @media (max-width:800px){
            width: 93%;
            padding: 4.5%;
            font-size: 3vw;
            height: auto;
        }}
    button{
        width:12%;
        padding: 0.5%;
        letter-spacing: 0.5vw;
        font-weight:bolder;
        border:none;
        background-color: transparent;
        color:#373737;
        outline: solid #373737 0.3vw;
        position: relative;
        z-index: 2;
    :hover{
        color: whitesmoke;
    }
    ::before {
    content: "";
    width: 0%;
    height: 5.5vh;
    position: absolute;
    top:0; left:0;
    background-color: #373737;
    @media (max-width:800px) { height: 12vw; }
    }
    :hover::before {
    position:absolute;
    width: 100%;
    transition: 0.4s linear;
    z-index: -1;
    }
    @media (max-width:800px){
        padding: 2.9%;
        width:93%;
        letter-spacing: 1.5vw;
        font-size: 4vw;  
        outline: solid #373737 0.6vw;
    }}
`