import { Context, createContext, PropsWithChildren, useEffect, useState } from "react";

interface Purchase {
    date: number;
    status: number;
}

interface Item {
    name: string;
    price: number;
    image: string;
    stock: number;
    purchases: Array<Purchase>;
}

/**
 * @interface TebexProviderContextProps
 * @description The context props for the react app.
 *
 * @param {Array<Item>} items The items in the shop.
 * @param {string} page The current page.
 * @param {Function} setPage The function to set the page.
 */
interface ShopProviderContextProps {
    items: Array<Item>;
    page: string;
    setPage: (page: string) => void;
}

/**
 * @constant ShopProviderContext
 * @description The context for the react app.
 * @type {Context<ShopProviderContextProps>}
 */
export const ShopProviderContext: Context<ShopProviderContextProps> =
    createContext({} as ShopProviderContextProps);

const DefaultItems = process.env.NODE_ENV === "development" ? [
	{
		name: "Nerds box Rainbow",
		price: 2.99,
		image: "https://kingcandy-shop.de/wp-content/uploads/2020/12/Nerds-Rainbow-141g-247x296.png",
		stock: 7,
		purchases: [
            {
                date: Date.now(),
                status: 0
            },
            {
                date: Date.now(),
                status: 1
            }
        ]
	}
] : [];

export default function ShopProvider({ children }: PropsWithChildren) {
    const [page, setPage] = useState("home");
    const [items, setItems] = useState<Array<Item>>(DefaultItems);

    useEffect(function () {
        const interval = setInterval(() => {
            fetch("http://storage.iot/items")
                .then((response) => response.json())
                .then(setItems)
        }, 250);

        return function () {
            clearInterval(interval)
        }
    }, [])

    return (
        <ShopProviderContext.Provider value={{
            items,
            page,
            setPage
        }}>
            {children}
        </ShopProviderContext.Provider>
    )
}