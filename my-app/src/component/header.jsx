import React from "react"
import "./styles/header.css"

export function Header () {
    return(
        <header>
            <div className="logo">Deploi.Ai</div>
            <div className="nav-bar">
                <span>Features</span>
                <span>Pricing</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </header>
    )

}
