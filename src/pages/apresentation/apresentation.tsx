import './apresentation.css'
import bonfire from '../../assets/bonfire.gif'
import en from '../../assets/usa.png'
import pt from '../../assets/brazil.png'
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

var Ingles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 35px;
`
var Portugues = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 35px;
`

function Apresentation() {
    const [language, setLanguage] = useState(0)

    const handleLanguageEn = () => {
        setLanguage(0)
    }
    const handleLanguagePt = () => {
        setLanguage(1)
    }

    if(language === 0){
        Portugues = styled.div`
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            margin: 35px;
        `
        Ingles = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            margin: 35px;
    `
    }
    if(language === 1){
        Portugues = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            margin: 35px;
        `
        Ingles = styled.div`
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            margin: 35px;
    `
    }
    
    return ( 
        <div className="container">
            <div className="apresentation-menu">
                <div className="language">
                    <img className='icons' onClick={handleLanguageEn}src={en} alt="" />
                    <img className='icons' onClick={handleLanguagePt} src={pt} alt="" />
                </div>
                <Ingles>
                    <h1>WELCOME!</h1>
                    <h2>I'm your bonfire pal</h2>
                    <p>Looking for some help to beat a souls like game?</p>
                    <p>I'm here to help you on this journey!</p>
                    <Link to='/gameselect'><input className='apresentation-btn' type="button" value="LETS ROCK >" /></Link>
                </Ingles>
                <Portugues>
                    <h1>BEM VINDO!</h1>
                    <h2>Sou seu companheiro de fogueira</h2>
                    <p>Está procurando ajuda para zerar algum jogo souls?</p>
                    <p>Estou aqui para te auxiliar nessa jornada!</p>
                    <Link to='/gameselect'><input className='apresentation-btn' type="button" value="VAMOS NESSA >" /></Link>
                    
                </Portugues>
            </div>
            <img id='bongif' src={bonfire} alt="" />
        </div>
     );
}

export default Apresentation;