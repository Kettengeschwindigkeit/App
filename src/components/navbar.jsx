import { useState } from "react"
import NavLink from "./navLink"

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [menuItems, setMenuItems] = useState([
        { id: 'main', text: 'Main', active: true, link: '#main' },
        { id: 'blog', text: 'Blog', active: false, link: '#blog' },
        { id: 'contacts', text: 'Contacts', active: false, link: '#contacts' } 
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
                    <NavLink key={item.id} text={item.text} active={item.active} link={item.link} />
                ))}
            </ul>
            )}
        </div>
    )
}

export default Navbar
