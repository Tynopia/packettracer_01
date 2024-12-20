import { ShopProviderContext } from "../providers/ShopProvider"
import { useContext } from "react"
import logo from "./../../../logo.png"

export default function HomePage() {
    const { setPage } = useContext(ShopProviderContext)

    function handleClick() {
        setPage("items")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <img src={logo} alt="logo" />
            <h1 className="text-3xl">Willkommen beim Candy Shop</h1>
            <button className="w-96 p-2 mt-4 transition bg-blue-500 hover:bg-blue-600 text-white rounded-md" onClick={handleClick}>
                Jetzt einkaufen
            </button>
        </div>
    )
}