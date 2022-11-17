import '../generalStyles.css';
import './styles.css'
import DoctorImg from '../../imgs/doctor.png'
import Button from '../Button/Button';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function HeroSection(){
    const heroSection = useRef();

    // Documentation on how to do this: https://greensock.com/react/ 
    // Documentation on how to animate while using the intersection oberver api https://dev.to/producthackers/intersection-observer-using-react-49ko
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.main-column', {duration: 0.8, x:'-10%', opacity: 0});
        }, heroSection);
        return () => ctx.revert();
    },[])

    return(
        <section ref={heroSection} class="hero-section">
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