import './component-styles.css'
import ImgTitleDescriptionMicroSection from './ImgTitleDescriptionMicroSection'
import Title from './Title';
import SubTitle from './Subtitle';
import scrumImg from '../imgs/Scrum-board-bro.png';
export default function ServicesSection(){
    return(
        <>
            <Title title='This is my headline' color='white' background_color='dark-blue'/>
            <SubTitle subtitle='this is my subheadline' color='white' background_color='dark-blue' />
            <ImgTitleDescriptionMicroSection 
            img={scrumImg} 
            subtitle="Google Ads" 
            description="Have you ever wondered why the patient went to your competitor and not you? With the power of Google Ads, you will be found by up to 3x more patients! Be the one who is ahead of the competition." style="left-text-right-img" />
            <ImgTitleDescriptionMicroSection 
            img="" 
            subtitle="Attractive and persuasive website" 
            description="We will create the perfect website to make your customer delighted with your service. With this, your patient will get to your attendant more prepared to schedule for a private consultation." style="right-text-left-img" />
            <ImgTitleDescriptionMicroSection 
            img="" 
            subtitle="Metric analysis and improving" 
            description="Long term is the key! In addition to bringing you many new patients from the first month onwards, with our quarterly analysis of metrics and structure, the trend is that your result will always increase each month." style="left-text-right-img" /> 
            <ImgTitleDescriptionMicroSection 
            img="" 
            subtitle="Facebook and Instagram ads" 
            description="Keep actively selling your best procedures to the world’s most used social networks. With Facebook and Instagram working for you, getting your treatments and procedures to reach more people will be easier than taking a nap in a rainy afternoon." style="right-text-left-img" />   
        </>
    )
}