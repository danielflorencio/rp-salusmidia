import './component-styles.css'
import { useState } from 'react'
function Answer({Answer, isVisible}){
    if(isVisible){
        return(
            <div className='answer'>{Answer}</div>
        )
    } else{
        return null
    }
}
export default function FaqItem({question, answer}){
    const [visibility, setVisibility] = useState(true)
    function changeVisibility(){visibility ? (setVisibility(false)) : (setVisibility(true))}
    return(
        <div className="accordion-item">
            <div className="question"><a class="accordion-link" onClick={changeVisibility}><strong>{question}</strong>{visibility ? (<ion-icon name="add-outline"></ion-icon>) : (<ion-icon name="remove-outline"></ion-icon>)}</a></div>
            <Answer Answer={answer} isVisible={visibility}/>
        </div>
    )
}