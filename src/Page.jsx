
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
            <footer>Footer</footer>
        </>
    )
}

export default Page
