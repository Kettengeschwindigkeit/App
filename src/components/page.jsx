import React from "react"
import Navbar from "./navbar"


const Page = () => {

    const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU"
    const sitename = "example.com"

    return (
        <>
            <header>
                <div>{sitename}</div>
                <img src={logoUrl} alt="logo" />
                <Navbar />
            </header>
            <footer>Footer</footer>
        </>
    )
}

export default Page
