import '../Components-general-styles.css';
import './CtaSectionStyles.css'
import Title from '../Title/Title';
import Button from '../Button/Button';
export default function CtaSection(){
    return(
        <section className='section color-white background-color-light-blue'>
            <Title title='CTA'/>
            <div className='button-to-center'>
                <Button cta='Schedule meeting' color='white' backgroundColor='red'/>
            </div>
        </section>
    )
}