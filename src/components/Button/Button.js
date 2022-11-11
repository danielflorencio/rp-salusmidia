import './Button.css'
import '../Components-general-styles.css'
export default function Button({cta, color, backgroundColor}){ 
    return(
        <button className={'button-1 ' + 'color-' + color + ' ' + 'background-color-' + backgroundColor}>{cta}</button>
    )
}