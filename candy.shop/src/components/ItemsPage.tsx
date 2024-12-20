import { useContext } from "react"
import { ShopProviderContext } from "../providers/ShopProvider"

export default function ItemsPage() {
    const { items, setPage } = useContext(ShopProviderContext)

    function handleClick() {
        setPage("home")
    }

    return (
        <div className="p-4">
            <button onClick={handleClick}>Zurück</button>
            <div className="mt-4">
                <h1 className="text-3xl">Unsere Produkte</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {items.map((item, index) => (
                        <div className="bg-gray-100 p-4 rounded-sm">
                            <h2 className="text-xl">{item.name}</h2>
                            <img src={item.image} alt={item.name} className="mt-2 w-full h-48 object-contain" />
                            <div className="flex items-center justify-between">
                                <span>Preis</span>
                                <span>{item.price.toFixed(2)} €</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Verfügbar</span>
                                <span>{item.stock}x</span>
                            </div>
                            <button
                                disabled={item.stock === 0}
                                className="w-full p-2 mt-4 text-white rounded-md transition bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500"
                                onClick={function () {
                                    fetch(`http://storage.iot/items/${index}/buy`)
                                }}>
                                {item.stock > 0 ? "Kaufen" : "Ausverkauft"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}