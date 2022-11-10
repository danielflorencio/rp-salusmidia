import './Section-styles.css';
export default function Section({title, subtitle, layout, color, backgroundColor}){
    if (title !== ''){
        return 
    }
    if(layout === 'one-row-two-cols' || layout === 'one-row-two-columns'){
        return(
            <section className='section-with-columns'>
                <div className='column left'></div>
                <div className='column right'></div>
            </section>
        )
    } else if (layout === 'multipe-blocks-section'){
        return(
            <section className=''>
                
            </section>
        )
    }
}