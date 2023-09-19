import './Navbar.css'
import logo from './img/logo.png'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

export default function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li><img src={logo} alt="logo-dealabs" /></li>                 
                    <li>Bons plans</li>
                    <li><ButtonMenu /></li>
                    <li>Gratuit</li>
                    <li>Discussions</li>
                    <li>Plus</li>
                </ul>
            </nav>
            <div className='breadcrumbs'>
                <p>Accueil {`>`} Gratuit</p>          
            </div>
        </>
    )
}