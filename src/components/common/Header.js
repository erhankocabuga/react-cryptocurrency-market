import React, { useEffect } from "react";
import "./Header.scss";

export default function Header() {
    return (
        <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
                <i className="bi bi-justify fs-3" />
            </a>
        </header>
    );
}
