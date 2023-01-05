import './styles.css'
import '../generalStyles.css'
import { useIntersection } from '../../customHooks/useIntersection'
export default function Title({title, color}){

  const [isIntersecting, ref] = useIntersection();

  return (
    <div ref={ref} className='title-box'>
        {isIntersecting ? (
            <h2 className={'color-' + color + ' section-title-h2 slideUp-animation'}>{title}</h2>
        ) : null}
    </div>
  )   
}