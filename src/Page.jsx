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

    const handleMenuClick = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <div>
            <button className="btn btn-sm btn-primary" onClick={handleMenuClick}>
                Menu
            </button>
            { open && <div>Menu content</div>}
        </div>
    )
}
