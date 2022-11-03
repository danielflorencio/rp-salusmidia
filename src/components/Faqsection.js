import './component-styles.css';
import FaqItem from './FaqItem'
import Title from './Title';
export default function FaqSection(){
    return(
        <>
        <div className='faq section'>
            <Title title='Frequently Asked Questions'/>
            <div className='faq-container'>
                <FaqItem question='Question 1' answer='Answer 1'/>
                <FaqItem question='Question 2' answer='Answer 2'/>
                <FaqItem question='Question 3' answer='Answer 3'/>
                <FaqItem question='Question 4' answer='Answer 4'/>
                <FaqItem question='Question 5' answer='Answer 5'/>
            </div>        
        </div>

        </>
    )
}