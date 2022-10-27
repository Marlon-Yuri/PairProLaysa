import styled from "styled-components";

export const ContL = styled.section`
    width: 100%;
    background-color: #F2F4F1;
    padding: 13% 0 10% 0;
`
export const BoxLatest= styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6vw;
    letter-spacing: 0.1vw;
    @media (max-width:800px) { font-size: 3.8vw;}
`
export const Line1= styled.div`
    width:6%;
    height: 0.5vh;
    margin-top: 1%;
    background-color: black;
    @media (max-width:800px) { width:10%;}
`
export const ContCard= styled.section`
    width:100%;
    height: auto;
    padding: 5% 5% 0% 5%;
    display: flex;
    justify-content: space-around;
    @media (max-width:800px){
    flex-direction: column;
    align-items: center;}
`
export const Card= styled.div`
    width: 28%;
    height: 70vh;
    background-color: white;
    box-shadow: 0vw 0.3vw 0.6vw 0.1vw grey;
    color:#373737;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-size: 1.8vw;
img{
    width:100%;
}
:hover{
    transform: scale(1.05);
}
@media (max-width:800px){
    width: 95%;
    height:100vw;
    margin-bottom: 5%;
    font-size:3vw;
}

`
export const Line2 = styled.div`
    width: 10%;
    height: 0.5vh;
    margin: 24% 0% 5% 0%;
    background-color: #373737;
    @media (max-width:800px){ margin: 15% 0% 2% 0%};
`