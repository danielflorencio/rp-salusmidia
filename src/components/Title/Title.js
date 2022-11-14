import './styles.css'
import '../generalStyles.css'
export default function Title({title, color}){
    return <h2 className={'color-' + color + ' section-title-h2'}>{title}</h2>
}