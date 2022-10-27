import React from "react";
import * as S from "./styled";
import Cake from "./Imagens/cake.png";
import Pizza from "./Imagens/pizza.png";
import Smoothie from "./Imagens/smothie.png";

export default function Latest(){
    return(
        <S.ContL>
            <S.BoxLatest>
                <h2>LATEST RECIPES</h2>
                <S.Line1></S.Line1>
            </S.BoxLatest>
            <S.ContCard>
                <S.Card>
                    <img src={Cake} alt="Cake Red Velvet" />
                    <S.Line2></S.Line2>
                    <p>Cake Red Velvet</p>
                </S.Card>
                <S.Card>
                    <img src={Pizza} alt="Pizza Margherita" />
                    <S.Line2></S.Line2>
                    <p>Margherita Pizza</p>
                </S.Card>
                <S.Card>
                    <img src={Smoothie} alt="Peanut Smoothie" />
                    <S.Line2></S.Line2>
                    <p>Peanut Smoothie</p>
                </S.Card>
            </S.ContCard>
        </S.ContL>
    )
}