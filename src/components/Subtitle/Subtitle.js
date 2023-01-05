import { useIntersection } from '../../customHooks/useIntersection';
import '../generalStyles.css'
import './styles.css'
export default function SubTitle({subtitle, color}){

  const [isIntersecting, ref] = useIntersection();

  return (
      <div ref={ref} className='title-box'>
          {isIntersecting ? (
              <h3 className={'color-' + color + ' section-subtitle-h3 slideUp-animation'}>{subtitle}</h3>
          ) : null}
      </div>
    )
}