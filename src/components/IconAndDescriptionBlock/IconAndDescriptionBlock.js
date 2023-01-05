import { IconContext } from 'react-icons'
import { useIntersection } from '../../customHooks/useIntersection';
import './styles.css'
export default function IconAndDescriptionBlock({icon, title, description}){
   
  const [isIntersecting, ref] = useIntersection();
   
  return(
    <div ref={ref} class="block">
        {isIntersecting ? (
            <div className='fill-block slideUp-animation'>      
                <div class="align-content-center">
                    <IconContext.Provider value={{className:'icon-sizer-40'}}>
                        {icon}
                    </IconContext.Provider>
                </div>
                <h3>{title}</h3>
                <p className='block-description'>{description}</p>
            </div>
        ) : null}                          
    </div>
  )
}