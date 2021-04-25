// CSS
import './SiteHeader.css';

//Dependencies
import { NavLink } from 'react-router-dom';
import house from './home.png';
import mail from './mail.png';
import linkedin from './linkedin.png'
import github from './github.png'

function SiteHeader() {
    return (
        <div id='navigation-container'>
            <ul>
                <li>
                    <h1 className='name'>
                        Jeff
                    </h1>
                    <h1 className='name'>
                        Zivkovic
                    </h1>
                </li>
                <li>
                    <NavLink
                        exact to='/'
                        className='sidebar-option'>
                            <img src={house} alt="Home" className='sidebar-icon'/>
                            <h2>Home</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact to='/contact'
                        className='sidebar-option'>
                            <img src={mail} alt="Contact" className='sidebar-icon'/>
                            <h2>Contact</h2>
                    </NavLink>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/jeff-zivkovic/' target='_blank' rel='noreferrer' className='sidebar-option'>
                        <img src={linkedin} alt="LinkedIn" className='sidebar-icon'/>
                        <h2>LinkedIn</h2>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/jz1611' target='_blank' rel='noreferrer' className='sidebar-option'>
                        <img src={github} alt="GitHub" className='sidebar-icon'/>
                        <h2>GitHub</h2>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SiteHeader;