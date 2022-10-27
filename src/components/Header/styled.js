import styled from "styled-components";
import { VscThreeBars } from "react-icons/vsc"
import Background from "./Imagens/recipes.png";

export const ContHeader = styled.section`
    width:97%;
    height: 100vh;
    margin: 1.5%;
    background-image: url(${Background});
    background-size: cover;
    background-position:center 85%;
    background-repeat: no-repeat;
    color:#373737;
`

export const ContNav = styled.div`
    width:100%;
    padding:2% 4% 0% 4%;
    display:flex;
    justify-content: space-between;
`
export const Navegation = styled.nav`
    width:50%;
    position: relative;
    @media(max-width:800px) {
        width:10vw; 
        position: absolute;
        top:0; right: 0;
    }

`
export const Menu = styled(VscThreeBars)`
    width:5%; height: 10%;
    position:relative;
    left:0%; bottom: 0;
    display: none;
    @media(max-width:800px) {display: grid; }

`
export const List = styled.ul`
    width:100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
li{
    width: 100%;
    padding: 1.8%;
    margin-left: 1.5%;
    text-align: center;
    cursor:pointer;
    :hover{
        outline:solid #373737 0.3vw;
    }
    @media(max-width:800px) {display: none;}
}
`
export const ContRecipes = styled.div`
    width:100%;
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
    color:#373737;
    letter-spacing: 1vw;
`