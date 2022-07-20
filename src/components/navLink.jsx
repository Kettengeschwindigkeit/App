import React, { useState } from "react";
import PropTypes from "prop-types";

const NavLink = (props) => {
    const [active, setActive] = useState(props.active);

    const handleClick = () => {
        setActive((prevState) => !prevState);
    };

    const getClasses = () => {
        let classes = "list-group-item";
        return (classes += active ? " active" : "");
    };

    return (
        <div>
            <button onClick={() => props.onActiveChange(props.id)}>
                toggle active
            </button>
            <li className={getClasses()} onClick={handleClick}>
                <a href={props.link}>{props.text}</a>
            </li>
        </div>
    );
};

NavLink.propTypes = {
    active: PropTypes.bool.isRequired,
    onActiveChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default NavLink;
