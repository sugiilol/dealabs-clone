import './Navbar.css'
import logo from './img/logo.png'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import Button from '@mui/material/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddIcon from '@mui/icons-material/Add';


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
                <div className='navbar-second-part' >
                    <input  className="input-search" type="text" placeholder="Rechercher..."/>
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