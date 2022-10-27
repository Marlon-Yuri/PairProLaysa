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
    }
    p{
        letter-spacing: 0.1vw;
        word-spacing: 0.3vw;
    }
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
    }
    button{
        width:12%;
        padding: 0.5%;
        letter-spacing: 0.1vw;
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
    }
    :hover::before {
    position:absolute;
    width: 100%;
    transition: 0.4s linear;
    z-index: -1;
    }
}
`