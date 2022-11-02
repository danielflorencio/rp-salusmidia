export default function FaqItem({question, answer}){
    return(
        <div>
            <div className="question">{question}</div>
            <div className="answer">{answer}</div>
        </div>
    )
}