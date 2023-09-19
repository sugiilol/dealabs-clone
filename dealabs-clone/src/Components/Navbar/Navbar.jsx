import './Navbar.css'
import logo from './img/logo.png'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import SearchTextfield from '../SearchTextfield/SearchTextfield'

export default function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li><img src={logo} alt="logo-dealabs" /></li>                 
                    <li><span className='color-button'>Bons plans</span></li>
                    <li><ButtonMenu /></li>
                    <li>Gratuit</li>
                    <li>Discussions</li>
                    <li>Plus</li>
                </ul>
                <SearchTextfield />
            </nav>
            <div className='breadcrumbs'>
                <p>Accueil {`>`} Gratuit</p>          
            </div>
        </>
    )
}