import '../generalStyles.css';
import './styles.css'
import DoctorImg from '../../imgs/doctor.png'
import Button from '../Button/Button';
export default function HeroSection(){
    return(
        <section class="hero-section">
            <div class="main-column left">
                <h1>The lack of patients in your healthcare clinic is a <strong>serious</strong> symptom.</h1>
                <h2>Schedule a free meeting with us and discover how we can help you with that.</h2>
                <Button cta='Schedule meeting' backgroundColor='red' color='white' size='medium'/>
            </div>
            <div class="main-column right align-content-center">
                <img className='main-img' src={DoctorImg}/>
            </div>
        </section>       
    )
}