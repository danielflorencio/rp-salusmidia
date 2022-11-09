import { IconContext } from 'react-icons'
import './component-styles.css'



export default function IconAndDescriptionBlock({icon, title, description}){
    return(
        <div class="block">
            <div class="center">
                <IconContext.Provider value={{className:'icon-sizer-40 center'}}>
                    {icon}
                </IconContext.Provider>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}