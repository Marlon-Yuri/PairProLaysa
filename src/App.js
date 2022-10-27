import React from "react";
import GlobStyled from "./styled"

import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

export default function App() {
    return(
        <div>
            <GlobStyled/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}