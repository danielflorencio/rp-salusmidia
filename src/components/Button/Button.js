import './styles.css'
import '../generalStyles.css'
export default function Button({cta, color, backgroundColor, size}){ 
    return(
        <button className={'button-1 ' + 'color-' + color + ' ' + 'background-color-' + backgroundColor + ' ' + size}>{cta}</button>
    )
}