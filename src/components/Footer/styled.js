import styled from "styled-components";

export const ContFooter =styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #F2F4F1;
    padding: 7% 2.5% 7% 2.5%;
    @media (max-width:800px){
        flex-direction: column-reverse;
        align-items: center;
    }
`
export const Icons =styled.div`
    width: 18%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    img{
        width:20%;
        height: auto;
    }
    @media (max-width:800px){ width: 55%; }
`
export const NavFoot =styled.nav`
    width:35%;
`
export const ListNav =styled.ul`
    width: 100%;
    color:#373737;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    li{
        cursor: pointer;
        :hover { font-weight: 800; }
        @media (max-width:800px) { letter-spacing: 0.5vw; margin-bottom:20%;}
    }
    @media (max-width:800px){
        width: 100%;
        flex-direction: column;
        font-size: 4vw;
        padding: 2% 0% 20% 0%;
    }
`
