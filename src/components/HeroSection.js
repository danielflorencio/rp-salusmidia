import React from "react";
import './component-styles.css';


export default function HeroSection(){
    return(
    <>
        <header>
            <img id="logo" src="" a="" href=""/>
            <nav>
                <a href="">Serviços</a>
                <a href="">Depoimentos</a>
                <a href="">Cursos</a>
                <a href="">SalusIndica</a>
                <a href="">Consultoria</a>
            </nav>
            </header>
        <main>
            <div class="section-1">
                <div class="main-column-left">
                    {/* <<img src="imgs/salus-black-logo.png" id="main-logo-img"> */}
                    <h1>The lack of patients in your healthcare clinic is a <strong>serious</strong> symptom.</h1>
                    <h2>Schedule a free meeting with us and discover how we can help you with that.</h2>
                    <input id="btn-1" type="submit" value="Schedule meeting"/>
                </div>
                <div class="main-column-right">
                    {/* <h1> yo wassup</h1>  */}
                </div>
            </div>
        </main>       
    </>
    )
}