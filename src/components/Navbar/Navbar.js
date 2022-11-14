import '../generalStyles.css'
import './styles.css'
export default function Navbar(){
    return(
        <header className='header'>
            <img id="logo" src="" a="" href=""/>
            <nav className='navbar'>
                <ul className='unordered-list'>
                    <li className='list-item'><a href=''>Services</a></li>
                    <li className='list-item'><a href=''>Testimonials</a></li>
                    <li className='list-item'><a href=''>Courses</a></li>
                    <li className='list-item'><a href=''>Affiliates</a></li>
                    <li className='list-item'><a href=''>Consultancy</a></li>
                </ul>
            </nav>
        </header>
    )
}