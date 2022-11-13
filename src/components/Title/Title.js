import './TitleStyles.css'
import '../Components-general-styles.css'
export default function Title({title, color}){
    return <h2 className={'color-' + color + ' section-title-h2'}>{title}</h2>
}