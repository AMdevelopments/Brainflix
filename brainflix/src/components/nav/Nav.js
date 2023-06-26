// Nav.js
import logoNav from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg'; // Add this line
import './_nav.scss';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <img src={logoNav} alt="logo" className="navbar__logo" />
            </div>

            <div className="navbar__middle">
                <input type="text" className="navbar__search" placeholder="Search..." />
                <img src={avatar} className="navbar__middle-avatar" alt="Avatar" />
            </div>

            <div className="navbar__right">
                <button className="navbar__upload">
                    Upload
                </button>
                <img src={avatar} alt="avatar" className="navbar__avatar" /> {/* Add this line */}
            </div>
        </nav>
    );
};

export default Nav;






