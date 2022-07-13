import React, { useState } from "react"


const NavLink = (props) => {

    const [active, setActive] = useState(props.active)

    const handleClick = () => {
        setActive((prevState) => !prevState)
    }

    const getClasses = () => {
        let classes = "list-group-item"
        return (classes += active ? " active" : "")
    }

    return <li className={getClasses()} onClick={handleClick}>
        <a href={props.link}>{props.text}</a>
    </li>
}

export default NavLink
