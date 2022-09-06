import React from "react";
import { Outlet } from "react-router";
import { Header, Footer } from "../../components";

function GeneralLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default GeneralLayout;
