import './component-styles.css';
import ImgTitleDescriptionMicroSection from './ImgTitleDescriptionMicroSection';
import Title from './Title';
import SubTitle from './Subtitle';
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
export default function StepByStepSection(){
    return(
        <>
            <Title 
            title='THE STEP-BY-STEP OF YOUR INCOME EVOLUTION IS HERE.' 
            color='dark-blue' 
            background_color='white'/>

            <SubTitle 
            subtitle='This is everything that will happen starting now.' 
            color='dark-blue' 
            background_color='white'/>

            <ImgTitleDescriptionMicroSection 
            img={img1} 
            subtitle="Step 1 - Free consultancy." 
            description="Here in this step we will analyze everything that is currently being done in your company and design which marketing strategy will make the most sense for you at the moment. Just this meeting will be already like a free mentorship for you." style="left-text-right-img" />
            <ImgTitleDescriptionMicroSection 
            img={img2}
            subtitle="Step 2 - Execution and revenue." 
            description="If the contract is closed, here is where we will make your company start receiving more patients. We will collect the necessary data to create your persuasive website, create your ad campaigns, and increase your number of consultations and procedures." style="right-text-left-img" />
            <ImgTitleDescriptionMicroSection 
            img={img3} 
            subtitle="Step 3 - Analysis and scale." 
            description="Here is where happiness lives, our favorite step. After collecting the data and improving the first campaigns, we will be able to know exactly what to do to further multiply your profit and the arrival of new patients." style="left-text-right-img" />   
        
        </>
    )
}