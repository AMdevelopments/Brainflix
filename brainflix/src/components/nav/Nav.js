// Nav.js
import { Link, useLocation } from 'react-router-dom';  
import logoNav from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import './_nav.scss';

const Nav = () => {
    const location = useLocation();
    const onUploadPage = location.pathname === '/upload';

    return (
        <nav className={`navbar ${onUploadPage ? 'navbar--upload-page' : ''}`}>
            <div className="navbar__left">
                <Link to="/">  
                    <img src={logoNav} alt="logo" className="navbar__logo" />
                </Link>
            </div>

            <div className="navbar__middle">
                <input type="text" className="navbar__search" placeholder="Search..." />
                <img src={avatar} className="navbar__middle-avatar" alt="Avatar" />
            </div>

            <div className="navbar__right">
                <Link to="/upload" style={{ textDecoration: 'none' }}>  {/* Added inline CSS here */}
                    <button className="navbar__upload">
                        Upload
                    </button>
                </Link>
                <img src={avatar} alt="avatar" className="navbar__avatar" />
            </div>
        </nav>
    );
};

export default Nav;









