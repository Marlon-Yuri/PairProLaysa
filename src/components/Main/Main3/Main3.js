import React from "react";
import * as S from "./styled"

export default function Subscribe(){
    return(
        <S.ContSub>
            <S.Subscribe>
                <h3>SUBSCRIBE</h3>
                <p>Sign up for newsletter</p>
            </S.Subscribe>
            <S.ContInp>
                <input type="email" placeholder="Your Email"/>
                <button>SUBMIT</button>
            </S.ContInp>
        </S.ContSub>
    )
}