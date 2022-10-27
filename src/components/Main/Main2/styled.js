import styled from "styled-components";

export const Container =styled.section`
    width: 100%;
`
export const ContAbout =styled.div`
    width: 100%;
    height: 97vh;
    display: flex;
    @media (max-width:800px){
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`
export const Spoon =styled.img`
    width: 50%;
    @media (max-width:800px){
        width: 100%;
    }
`
export const Box =styled.div`
    width: 50%;
    padding: 10% 10% 9% 10%;
    color:#373737;
    font-size: 1.5vw;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (max-width:800px){
        font-size: 2.5vw;
        text-align: justify;
        padding: 4% 0% 3% 0%;}
`
export const About =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0.2vw;
`
export const Line3 =styled.div`
    width:15%;
    height: 0.5vh;
    margin: 2% 0% 4% 0%;
    background-color: #373737;
    @media (max-width:800px){
        margin: 2% 0% 8% 0%;
    }
`