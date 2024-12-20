import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ShopProvider from './providers/ShopProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ShopProvider>
            <App />
        </ShopProvider>
    </StrictMode>,
)
