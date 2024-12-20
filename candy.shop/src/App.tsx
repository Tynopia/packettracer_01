import { useContext } from "react"
import HomePage from "./components/HomePage"
import ItemsPage from "./components/ItemsPage"
import { ShopProviderContext } from "./providers/ShopProvider"

function App() {
    const { page } = useContext(ShopProviderContext)

    if (page === "home") {
        return <HomePage />
    } else if (page === "items") {
        return <ItemsPage />
    }
}

export default App
