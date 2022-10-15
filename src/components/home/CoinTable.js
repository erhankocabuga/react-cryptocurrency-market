import millify from "millify";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./CoinTable.scss";

function CoinTable({ coins }) {
    return (
        <div className="table-responsive mx-3">
            <table className="table table-hover mb-0 coinslisttable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Market Cap</th>
                        <th>24h Volume</th>
                        <th style={{ minWidth: 70 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((item, ix) => (
                        <tr key={ix}>
                            <td>{item.rank}</td>
                            <td>
                                <img
                                    className="coin-icon"
                                    src={item.iconUrl}
                                    alt={item.name}
                                />
                                <strong style={{ color: item.color }}>
                                    {item.name}
                                </strong>{" "}
                                ({item.symbol})
                            </td>
                            <td>
                                ${" "}
                                {millify(item.price, {
                                    precision: 3,
                                    space: true,
                                })}
                            </td>
                            <td
                                className={
                                    parseFloat(item.change) > 0 ? "up" : "down"
                                }
                            >
                                {item.change}
                            </td>
                            <td>
                                ${" "}
                                {millify(item.marketCap, {
                                    precision: 3,
                                    space: true,
                                })}
                            </td>
                            <td>
                                ${" "}
                                {millify(item["24hVolume"], {
                                    precision: 3,
                                    space: true,
                                })}
                            </td>
                            <td>
                                <Sparklines
                                    data={item.sparkline}
                                    limit={5}
                                    width={100}
                                    height={40}
                                    margin={0}
                                >
                                    <SparklinesLine color="blue" />
                                </Sparklines>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CoinTable;
