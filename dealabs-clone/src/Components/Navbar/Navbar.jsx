import './Navbar.css'
import logo from './img/logo.png'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import Button from '@mui/material/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddIcon from '@mui/icons-material/Add';
import ButtonMenuTablet from '../ButtonMenuTablet/ButtonMenuTablet'


export default function Navbar() {

    return (
        <>
            <nav>
                <div className='navbar-first-part'>
                    <ul>
                        <li><img src={logo} alt="logo-dealabs" /></li>
                        <span className='display-menu-tablet'><li><ButtonMenuTablet /></li></span>
                        <li><span className='color-button vanish-action'>Bons plans</span></li>
                        <li className='vanish-action'><ButtonMenu /></li>
                        <li className='vanish-action'>Gratuit</li>
                        <li className='vanish-action'>Discussions</li>
                        <li className='vanish-action'>Plus</li>
                    </ul>
                </div>
                <div className='navbar-second-part' >
                    <input className="input-search" type="text" placeholder="Rechercher..." />
                    <Button variant="contained" className='custom-button connexion-button'><PermIdentityIcon /><span>Connexion</span></Button>
                    <Button variant="contained" className='custom-button add-button'><AddIcon /><span>Poster...</span></Button>
                </div>
            </nav>
            <div className='breadcrumbs'>
                <p>Accueil {` > `} Gratuit</p>
            </div>
        </>
    )
}