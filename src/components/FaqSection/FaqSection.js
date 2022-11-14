import './styles.css';
import Title from '../Title/Title';
import { useState } from 'react';

function Answer({Answer, isVisible}){
    if(isVisible){
        return <div className='answer'><h4>{Answer}</h4></div>
    } else return null
}

function FaqItem({question, answer}){
    const [visibility, setVisibility] = useState(true)
    function changeVisibility(){visibility ? (setVisibility(false)) : (setVisibility(true))}
    return(
        <div className="accordion-item">
            <div className="question"><a class="accordion-link" onClick={changeVisibility}><h3>{question}</h3>{visibility ? (<ion-icon name="remove-outline"></ion-icon>) : (<ion-icon name="add-outline"></ion-icon>)}</a></div>
            <Answer Answer={answer} isVisible={visibility}/>
        </div>
    )
}

export default function FaqSection(){
    return(
        <section className='section'>
            <Title title='Frequently Asked Questions'/>
            <div className='faq-container'>
                <FaqItem 
                question='1. Do you follow the rules of the Federal board of medicine?' 
                answer='Yes. All communications carried out by our company follow the rules imposed by the federal board of medicine, thus avoiding any problems that could affect your registration with the board.'/>

                <FaqItem 
                question='2. Why should i hire you instead of creating my own team?' 
                answer="That's simple: effectiveness and economy. While hiring all professionals alone would be 6 times more expensive, these professionals would still need training, which would cost you even more money and time to deliver results."/>

                <FaqItem 
                question='3. Do you also work with infoproducts?' 
                answer='Yes. Our company has even generated results of more than 7 digits in revenue for infoproducers in the health area.

                To discuss a possible partnership in infoproducts, just go through the normal consulting process available through the button here on the page.'/>

                <FaqItem 
                question='4. Do you only work with doctors and healthcare clinics?' 
                answer='Yes.'/>

                <FaqItem 
                question='5. How does your free consulting session work?' 
                answer='We have a quick 30-60 minute chat to find out how your online marketing and positioning is doing.

                From there, we give you a complete plan of what you can do to improve your results and attract more private patients, as quickly as possible.'/>
            </div>        
        </section>
    )
}