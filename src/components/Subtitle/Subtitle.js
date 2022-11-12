import '../Components-general-styles.css'
import './SubtitleStyles.css'
export default function SubTitle({subtitle, color}){
    return <h3 className={'color-' + color + ' section-subtitle-h3'}>{subtitle}</h3>
}