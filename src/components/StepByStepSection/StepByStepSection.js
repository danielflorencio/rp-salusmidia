import '../Components-general-styles.css'
import ImgTitleDescriptionRow from '../ImgTitleDescriptionRow/ImgTitleDescriptionRow';
import Title from '../Title/Title';
import SubTitle from '../Subtitle/Subtitle';
import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
export default function StepByStepSection(){
    return(
        <section className='section color-dark-blue background-color-white'>
            <Title 
            title='The step-by-step of your income evolution is here.' 
            color='dark-blue' 
            background_color='white'/>

            <SubTitle 
            subtitle='This is everything that will happen starting now.' 
            color='dark-blue' 
            background_color='white'/>

            <ImgTitleDescriptionRow 
            img={img1} 
            subtitle="Step 1 - Free consultancy." 
            description="Here in this step we will analyze everything that is currently being done in your company and design which marketing strategy will make the most sense for you at the moment. Just this meeting will be already like a free mentorship for you." 
            style="left-text-right-img" 
            shadowyBorderBox={true}/>
            
            <ImgTitleDescriptionRow 
            img={img2}
            subtitle="Step 2 - Execution and revenue." 
            description="If the contract is closed, here is where we will make your company start receiving more patients. We will collect the necessary data to create your persuasive website, create your ad campaigns, and increase your number of consultations and procedures." 
            style="right-text-left-img" 
            shadowyBorderBox={true}/>
            
            <ImgTitleDescriptionRow 
            img={img3} 
            subtitle="Step 3 - Analysis and scale." 
            description="Here is where happiness lives, our favorite step. After collecting the data and improving the first campaigns, we will be able to know exactly what to do to further multiply your profit and the arrival of new patients." 
            style="left-text-right-img" 
            shadowyBorderBox={true}/>   
        </section>
    )
}