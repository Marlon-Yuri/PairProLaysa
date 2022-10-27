import React from "react";
import * as S from "./styled";
import Spoon from "./Imagens/colher.png";

export default function About() {
    return (
        <S.Container>
            <S.ContAbout>
                <S.Spoon src={Spoon} alt="Spoon"/>
                <S.Box>
                    <S.About>
                        <h2>ABOUT</h2>
                        <S.Line3></S.Line3>
                    </S.About>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC, making it over 2000
                        years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia, looked up one of the more obscure Latin words, consectetur, from a
                        Lorem Ipsum passage, and going through the cites of the word in classical.
                        </p>
                </S.Box>
            </S.ContAbout>
        </S.Container>
    )
}