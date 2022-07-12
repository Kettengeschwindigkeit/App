
export const Page = () => {
    
    const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU"
    const sitename = "example.com"

    const getHeadLine = () => {
        return logoUrl ? (
            <img src={logoUrl} alt="logo" />
        ) : (
            <div>{sitename}</div>
        )
    }

    return (
        <>
            <header>{getHeadLine()}</header>
            <footer>Footer</footer>
        </>
    )
}

export default Page
