import PropTypes from 'prop-types';
import { Icon } from '../icon'
import { NavLink } from "react-router-dom";

const NavButton = (props) => {
    const { text, iconName, to } = props;
    
    return (
        <div className="nav__link">
            <div className="nav__group">
                <NavLink to={to} activeClassName="nav__link--active">
                    <Icon size={30} iconName={iconName} />
                    <span>{text}</span>
                </NavLink>
            </div>
        </div>
    );
}

NavButton.propTypes = {
    text: PropTypes.string,
    iconName: PropTypes.string,
    handleNav: PropTypes.func
}

export default NavButton;
