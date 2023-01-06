import { useIntersection } from '../../customHooks/useIntersection';
import './styles.css'
export default function ImgTitleDescriptionRow({img, subtitle, description, style, shadowyBorderBox}){
    
    const [isIntersecting, ref] = useIntersection();
    
    return(
        <div ref={ref} class={style + " inner-section step-by-step-row"}>
            {isIntersecting ? (
            <>
                <div className="inner-column left animate-left-column">
                    <h2 className="text-to-left">{subtitle}</h2>
                    <p>{description}</p>
                </div>
                <div class="inner-column right mockup animate-right-column">
                    <div className={shadowyBorderBox ? 'shadowyBorderBox' : 'mockup-img'}>
                        <img className='mockup' src={img} alt="mockup"/>
                    </div>
                </div>
            </>
            ): null}
        </div>
    )
}