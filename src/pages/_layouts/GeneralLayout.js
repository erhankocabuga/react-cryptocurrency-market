import React from "react";
import { Outlet } from "react-router";
import { Header, Footer, Sidebar } from "../../components";

function GeneralLayout() {
    return (
        <>
            <Sidebar />
            <div id="main">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default GeneralLayout;
