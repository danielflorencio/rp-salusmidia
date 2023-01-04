import '../generalStyles.css'
import './styles.css'
import IconAndDescriptionBlock from "../IconAndDescriptionBlock/IconAndDescriptionBlock";
import SubTitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import { AiFillStar } from 'react-icons/ai';
import {FaTicketAlt} from 'react-icons/fa';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {AiOutlineCalendar} from 'react-icons/ai';
import {BiHappyBeaming} from 'react-icons/bi';
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import {BsFillBarChartLineFill} from 'react-icons/bs'
import {BiMoney} from 'react-icons/bi';


export default function IconsAndDescriptionSection(){
    return(
        <section className='section color-dark-blue background-color-light-blue'>
            <Title 
            title='A well done marketing can bring you all these benefits.' 
            color='white'/>

            <SubTitle 
            subtitle='Schedule a meeting now and find out how we can help you get them.' 
            color='white' 
            background_color='light-blue'/>

            <div class='blocks-container'>

                <IconAndDescriptionBlock 
                title='Higher average ticket' 
                icon={<FaTicketAlt/>}
                description='With more patients incoming, raising your prices and also your revenue is just a matter of time.'/>
            
                <IconAndDescriptionBlock 
                title='No more insurances' 
                icon={<AiOutlineCreditCard/>} 
                description='By raising your prices, you’ll say godbye to the need of attending insurance patients in your healthcare clinic.' />
                
                <IconAndDescriptionBlock 
                title='More free time' 
                icon={<AiOutlineCalendar/>} 
                description='With less insurance consultations and procedures, the increase in revenue will allow you to have more time with your family.' />

                <IconAndDescriptionBlock 
                title='More quality of life' 
                icon={<BiHappyBeaming/>}
                description='Stop worrying about your company’s commercial area. Focus on the medicine, and the commercial part is up to us.' />
                
                <IconAndDescriptionBlock 
                title='Medical recognition' 
                icon={<MdOutlineHealthAndSafety/>} 
                description='By having more and more patients, you will be more and more recommended and become an even greater authority.' />
                
                <IconAndDescriptionBlock 
                title='Your business growing' 
                icon={<BsFillBarChartLineFill/>} 
                description='With more profit coming in, you will be able to hire more employees, and even other doctors to attend patients in your place.' />                
            
                <IconAndDescriptionBlock 
                title='Future economy' 
                icon={<BiMoney/>}
                description='By signing a contract with us now, you guarantee exclusive discounts (and perhaps free access) to future Salus products.' />
                
                <IconAndDescriptionBlock 
                title='6X cheaper' 
                icon={<AiFillStar/>}
                description='Hiring our services is 6 times cheaper than assembling your own team. Close the contract before our prices increase.' />    
            
            </div>
        </section>
    )
}