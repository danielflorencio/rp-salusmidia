import './component-styles.css'
import IconAndDescriptionBlock from "./IconAndDescriptionBlock";
import SubTitle from './Subtitle';
import Title from './Title';

export default function IconsAndDescriptionSection(){
    return(
        <>
            <Title 
            title='A WELL DONE MARKETING CAN BRING YOU ALL THESE BENEFITS.' 
            color='white' 
            background_color='light-blue'/>

            <SubTitle 
            subtitle='Schedule a meeting now and find out how we can help you get them.' 
            color='white' 
            background_color='light-blue'/>

            <div className="section-type-blue" id='benefit-section'>
                <IconAndDescriptionBlock 
                title='Higher average ticket' 
                src='kasdas' 
                description='With more patients incoming, raising your prices and also your revenue is just a matter of time.' />
                
                <IconAndDescriptionBlock 
                title='No more insurances' 
                src='kasdas' 
                description='By raising your prices, you’ll say godbye to the need of attending insurance patients in your healthcare clinic.' />
                
                <IconAndDescriptionBlock 
                title='More free time' 
                src='kasdas' 
                description='With less insurance consultations and procedures, the increase in revenue will allow you to have more time with your family.' />

                <IconAndDescriptionBlock 
                title='More quality of life' 
                src='kasdas'
                description='Stop worrying about your company’s commercial area. Focus on the medicine, and the commercial part is up to us.' />
                
                <IconAndDescriptionBlock 
                title='Medical recognition' 
                src='kasdas' 
                description='By having more and more patients, you will be more and more recommended and become an even greater authority.' />
                
                <IconAndDescriptionBlock 
                title='Your business growing' 
                src='kasdas' 
                description='With more profit coming in, you will be able to hire more employees, and even other doctors to attend patients in your place.' />                
            
                <IconAndDescriptionBlock 
                title='Future economy' 
                src='kasdas' 
                description='By signing a contract with us now, you guarantee exclusive discounts (and perhaps free access) to future Salus products.' />
                
                <IconAndDescriptionBlock 
                title='6X cheaper' 
                src='kasdas' 
                description='Hiring our services is 6 times cheaper than assembling your own team. Close the contract before our prices increase.' />    
            </div>
        </>
    )
}