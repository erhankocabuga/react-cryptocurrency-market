import React, { useEffect } from "react";
import "./Footer.scss";

import { injectScript } from "../../lib/utils";

export default function Footer() {
    useEffect(() => {
        injectScript(
            "/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"
        );
        injectScript("/assets/js/bootstrap.bundle.min.js");
        injectScript("/assets/vendors/apexcharts/apexcharts.js");
        injectScript("/assets/js/pages/dashboard.js");
        injectScript("/assets/js/main.js");
    }, []);

    return (
        <>
            <footer>
                <div className="footer clearfix mb-0 text-muted">
                    <div className="float-start">
                        <p>
                            {new Date().getFullYear()} © React Cryptocurrency
                            Market
                        </p>
                    </div>
                    <div className="float-end">
                        <p>
                            Mazer template Crafted with
                            <span className="text-danger">
                                <i className="bi bi-heart" />
                            </span>
                            by <a href="http://ahmadsaugi.com">A. Saugi</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
