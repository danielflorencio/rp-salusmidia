import './component-styles.css';
import Title from './Title';
import CtaButton from './CtaButton'
export default function CtaSection(){
    return(
        <>
            <Title/>
            <CtaButton cta='Schedule meeting' background_color={'light-blue'}/>
        </>
    )
}