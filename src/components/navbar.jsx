import { useState } from "react"
import NavLink from "./navLink"

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [menuItems, setMenuItems] = useState([
        { id: 'main', text: 'Main', active: true },
        { id: 'blog', text: 'Blog', active: false },
        { id: 'contacts', text: 'Contacts', active: false } 
    ])

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
                    <NavLink key={item.id} text={item.text} active={item.active} />
                ))}
            </ul>
            )}
        </div>
    )
}

export default Navbar
