import styled from "styled-components";

export const Cont = styled.section`
    width: 97%; height: 100vh;
    background-color: rgba(0,0,0,0.3);
    position:absolute;
    left: 0; top: 0;
    display: flex;
    justify-content: end;
    padding-top: 8%;
    margin: 1.5%;
`
export const Nav = styled.nav`
    width:30%; height: 40%;


`
export const List = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    li:first-child{
        &:hover{
            background-color: red;
            color: white;
            border: none;
        }
    }
    li{
        width: 100%;
        height: 30%;
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        list-style: none;
        &:hover{
            border:solid 0.5vw gray;
        }
    }
`

