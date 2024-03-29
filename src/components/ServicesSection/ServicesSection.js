import '../generalStyles.css'
import Title from '../Title/Title';
import SubTitle from '../Subtitle/Subtitle';
import {BsGoogle} from 'react-icons/bs';
import {AiFillFacebook} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';
import {AiOutlineLineChart} from 'react-icons/ai';
import BigIconTitleDescriptionRow from '../BigIconTitleDescriptionRow/BigIconTitleDescriptionRow';
export default function ServicesSection(){
    return(
        <section className='section color-dark-blue background-color-white'>
            <Title title='The 4 things that will multiply the number of incoming patients in your business...'/>

            <SubTitle subtitle='These are the basic pillars that will bring your revenue to the next level.'/>

            <BigIconTitleDescriptionRow
            img={<BsGoogle/>} 
            subtitle="Google Ads" 
            description="Have you ever wondered why the patient went to your competitor and not you? With the power of Google Ads, you will be found by up to 3x more patients! Be the one who is ahead of the competition." 
            style="default" 
            shadowyBorderBox={false}/>
            
            <BigIconTitleDescriptionRow
            img={<CgWebsite/>} 
            subtitle="Attractive and persuasive website" 
            description="We will create the perfect website to make your customer delighted with your service. With this, your patient will get to your attendant more prepared to schedule for a private consultation." 
            style="reverse" 
            shadowyBorderBox={false}/>
            
            <BigIconTitleDescriptionRow
            img={<AiOutlineLineChart/>}
            subtitle="Metric analysis and improving" 
            description="Long term is the key! In addition to bringing you many new patients from the first month onwards, with our quarterly analysis of metrics and structure, the trend is that your result will always increase each month." 
            style="default" 
            shadowyBorderBox={false}/> 
            
            <BigIconTitleDescriptionRow
            img={<AiFillFacebook/>} 
            subtitle="Facebook and Instagram ads" 
            description="Keep actively selling your best procedures to the world’s most used social networks. With Facebook and Instagram working for you, getting your treatments and procedures to reach more people will be easier than taking a nap in a rainy afternoon." 
            style="reverse" 
            shadowyBorderBox={false}/>   
        </section>
    )
}