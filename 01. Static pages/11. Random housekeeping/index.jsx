/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <h1>
        Anything you want
    </h1>
    </StrictMode>
)