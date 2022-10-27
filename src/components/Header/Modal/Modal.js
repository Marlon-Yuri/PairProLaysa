import React from "react";
import * as S from "./styled";

export default function Modal({id= "Modal", onClose= () => {}}){
    const Close = (e) => {
        if (e.target.id === id) onClose();
    };
    return( 
    <S.Cont id={id} onClick={Close}>
        <S.Nav>
            <S.List>
                <li onClick={()=>(onClose())}>Fechar</li>
                <li >ABOUT</li>
                <li>RECIPES</li>
                <li>SUBSCRIBE</li>
            </S.List>
        </S.Nav>
    </S.Cont>)
}