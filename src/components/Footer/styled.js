import styled from "styled-components";

export const ContFooter =styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #F2F4F1;
    padding: 7% 2.5% 7% 2.5%;
`
export const Icons =styled.div`
    width: 18%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    img{
        width:20%;
        height: 7vh;
    }
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
        :hover{
            font-weight: 800;
        }
    }
`
