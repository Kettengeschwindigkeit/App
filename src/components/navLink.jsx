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

    return (
        <div>
            <button onClick={() => props.onActiveChange(props.id)}>toggle active</button>
            <li className={getClasses()} onClick={handleClick}>
                <a href={props.link}>{props.text}</a>
            </li>
        </div>
    )
}

export default NavLink
