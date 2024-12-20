import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import ShopProvider from "./../../candy.shop/src/providers/ShopProvider.tsx"
import App from "./App.tsx"

import "./index.css"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ShopProvider>
            <App />
        </ShopProvider>
    </StrictMode>,
)
