import { useState } from "react"

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [menuItems, setMenuItems] = useState(["Main", "Blog", "Contacts"])

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
    }

    const handleItemClick = (id) => {
        console.log(id)
    }

    return (
        <div>
            <button className="btn btn-sm btn-primary" onClick={handleMenuClick}>Menu</button>
            {open && (
            <ul className="list-group">
                {menuItems.map((item) => (
                    <li className="list-group-item" key={item} onClick={() => handleItemClick(item)}>{item}</li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default Navbar