
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

    let open =  false
    const handleMenuClick = () => {
        open = !open
        console.log(open)
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
