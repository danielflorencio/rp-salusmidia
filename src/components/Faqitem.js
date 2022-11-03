import './component-styles.css'
import { useState } from 'react'
import { isVisible } from '@testing-library/user-event/dist/utils'

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
    function changeVisibility(visibility){
        if (visibility === true){
            setVisibility(false)
        } else{
            setVisibility(true)
        }
    }
    return(
        <div className="accordion-item">

            <div className="question"><a class="accordion-link" onClick={changeVisibility(visibility)}>{question}</a></div>
            <Answer Answer={answer} isVisible={visibility}/>
            {/* {visibility ? <div className='answer'></div> : <div></div> } */}
            {/* // <div className="answer">{answer}</div> */}
        </div>
    )
}

{/* <div class="accordion-item" id="question-1">
<div>
<a class="accordion-link" href="#question-1">
    Question 1
    <ion-icon name="add-outline" class="add-icon"></ion-icon>
    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
</a> */}
