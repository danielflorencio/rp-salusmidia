import { IconContext } from 'react-icons'
import './IconAndDescriptionBlock.css'
export default function IconAndDescriptionBlock({icon, title, description}){
    return(
        <div class="block">
            <div class="align-content-center">
                <IconContext.Provider value={{className:'icon-sizer-40'}}>
                    {icon}
                </IconContext.Provider>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}