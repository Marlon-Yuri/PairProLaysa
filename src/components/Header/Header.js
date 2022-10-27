import React, { useState } from "react";
import Modal from "./Modal/Modal"
import * as S from "./styled";

export default function Header(){
    const [mod, setMod] = useState(false)
    return(
        <S.ContHeader>
                <S.ContNav>
                    <h2>RC</h2>
                    <S.Menu onClick={()=>setMod(true)}/>
                        {!!mod && (<Modal onClose={()=>setMod(false)}/>)}
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