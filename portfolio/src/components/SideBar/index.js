import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import ToastLogo from '../../assets/images/toast_logo.png'
import ToastShock from '../../assets/images/toast_jump.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar = () =>(
    <div className = 'nav-bar'>
        <Link className ='logo' to = '/'>
            <img src = {ToastLogo} alt = "toastlogo"/>
            <img src = {ToastShock} className = "img-hover" alt = "toastjump"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to = "/home">
                <FontAwesomeIcon icon = {faHome} color = "#383838" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "prof-link" to = "/profile">
                <FontAwesomeIcon icon = {faUser} color = "#383838" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "proj-link" to = "/projects">
                <FontAwesomeIcon icon = {faFolderOpen} color = "#383838" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "cont-link" to = "/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#383838" />
            </NavLink>
        </nav>
        <div className = "ext-link">
            <h3>External Links</h3>
            <ul>
                <li>
                    <a target = "_blank" rel = 'noreferrer' 
                    href = 'https://www.linkedin.com/in/touseef-hossain-493265140/'>
                        <FontAwesomeIcon icon = {faLinkedin} color = "#383838" />
                    </a>
                </li>
                <li>
                    <a target = "_blank" rel = 'noreferrer' 
                    href = 'https://github.com/toastyho'>
                        <FontAwesomeIcon icon = {faGithub} color = "#383838" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default SideBar;