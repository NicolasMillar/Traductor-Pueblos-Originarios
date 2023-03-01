import { NavLink } from "react-router-dom";
import './index.scss';

const Header = () => {
    return (
        <>
           <div className="nav-bar">
                <nav>
                    <NavLink exact="true" activeclassname="active" to="/">
                        Home
                    </NavLink>
                </nav>
            </div> 
        </>
    )
    
}

export default Header;