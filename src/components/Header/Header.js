import React from "react";
import * as S from "./styled"

export default function Header(){
    return(
        <S.ContHeader>
                <S.ContNav>
                    <h2>RC</h2>
                    <S.Navegation>
                        <S.List>
                            <li>ABOUT</li>
                            <li>RECIPES</li>
                            <li>SUBSCRIBE</li>
                        </S.List>
                    </S.Navegation>
                </S.ContNav>
            <S.ContRecipes>
                <h1>RECIPES</h1>
            </S.ContRecipes>
        </S.ContHeader>
    )
}