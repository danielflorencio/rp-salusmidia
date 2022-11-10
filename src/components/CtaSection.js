// import './component-styles.css';
import Title from './Title';
import Button from './Button/Button'
export default function CtaSection(){
    return(
        <>  
            <Title title='CTA' color='white' background_color='light-blue'/>
            <Button cta='Schedule meeting' color='white' backgroundColor='red'/>
        </>
    )
}