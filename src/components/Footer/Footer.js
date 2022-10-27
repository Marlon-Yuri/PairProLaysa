import React from "react";
import * as S from "./styled"
import Instagram from "./Imagens/insta1.png";
import Twitter from "./Imagens/twitter2.png";
import Facebook from "./Imagens/facebook3.png";
import Pinterest from "./Imagens/pinterest4.png";

export default function Footer(){
    return(
        <S.ContFooter>
            <S.Icons>
                <img src={Instagram} alt="Logo instagram"/>
                <img src={Twitter} alt="Logo twitter"/>
                <img src={Facebook} alt="Logo facebook"/>
                <img src={Pinterest} alt="Logo pinterest"/>
            </S.Icons>
            <S.NavFoot>
                <S.ListNav>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                </S.ListNav>
            </S.NavFoot>
        </S.ContFooter>
    )
}