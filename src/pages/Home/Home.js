import React, { useEffect, useState } from "react";
import { CoinTable } from "../../components";
import { useGetCryptosQuery } from "../../services/api";
import "./Home.scss";

export default function Home() {
    const { data, isFetching } = useGetCryptosQuery();
    const [coinData, setCoinData] = useState({ coins: [], stats: {} });
    // const { coins, stats } = data?.data;

    useEffect(() => {
        if (isFetching) return;
        if (data?.data) {
            setCoinData(data.data);
        }
    }, [isFetching]);

    return (
        <>
            <section className="section">
                <div className="row" id="table-hover-row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">
                                    Cryptocurrency price list
                                </h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <p>
                                        All cryptocurrencies ranked by market.
                                    </p>
                                </div>

                                <CoinTable coins={coinData.coins} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
