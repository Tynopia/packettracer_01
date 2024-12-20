import { ShopProviderContext } from "../../candy.shop/src/providers/ShopProvider"
import { useContext } from "react"

function App() {
    const { items } = useContext(ShopProviderContext)

    return (
        <div className="p-4">
            {items.map((item, index) => (
                <div className="bg-gray-100">
                    <div key={index} className="flex items-center justify-between p-4">
                        <h2>{item.name}</h2>
                        <img src={item.image} alt={item.name} className="h-24" />
                    </div>
                    <div className="flex flex-col p-4 gap-2">
                        {item.purchases.map((purchase, index2) => (
                            <div key={index} className="flex items-center justify-between">
                                <span>{new Date(purchase.date).toLocaleString()}</span>
                                <button className="p-2 text-white rounded-md transition bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500" onClick={function () {
                                    fetch(`http://storage.iot/items/${index}/storage/${index2}`)
                                }} disabled={purchase.status === 2}>
                                    {purchase.status === 0 ? "Im Lager markieren" : purchase.status === 1 ? "Verpackt" : "Abgeschlossen"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default App
