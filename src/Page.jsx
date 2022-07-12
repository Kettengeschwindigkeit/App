import { useState } from "react"


export const Page = () => {

    const logoUrl = ""
    const sitename = "example.com"

    const getClasses = () => {
        let classes = "p-2 shadow"
        return (classes += logoUrl ? "me-4" : "")
    }

    return (
        <>
            <header className="d-flex align-items-center w-100">
                <div className={getClasses()}>
                    {sitename}
                </div>
                {logoUrl && <img src={logoUrl} alt="logo" />}
            </header>
            <Navbar />
            <footer>Footer</footer>
        </>
    )
}


export const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [menuItems, setMenuItems] = useState(["Main", "Blog", "Contacts"])

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
    }

    const handleItemClick = (id) => {
        console.log(id)
    }

    const handleChangeMenu = () => {
        setMenuItems(["New menu item 1", "New menu item 2"])
    }

    const handleChangeMenuAdd = () => {
        setMenuItems((prevItems) => prevItems.push("New menu item 1"))
    }

    return (
        <div>
            <button className="btn btn-sm btn-primary" onClick={handleMenuClick}>Menu</button>
            <button className="btn btn-sm btn-primary" onClick={handleChangeMenu}>Change menu</button>
            <button className="btn btn-sm btn-primary" onClick={handleChangeMenuAdd}>Add menu</button>
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
