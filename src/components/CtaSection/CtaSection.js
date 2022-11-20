import '../generalStyles.css';
import './styles.css'
import Title from '../Title/Title';
import Form from '../Form/Form'
import Button from '../Button/Button';
export default function CtaSection(){
    return(
        <section className='section cta-section color-white background-color-light-blue'>
            <div id='cta-sec-title-padding'>
                <Title  title='Speak to one of our marketing specialists and find out how we can make your company grow.'/>
            </div>
            <div className='button-to-center'>
                <Button cta='Schedule meeting' color='white' backgroundColor='red'/>
            </div>
        </section>
    )
}