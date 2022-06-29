import React from 'react'
import Charttwo from '../../components/charts/Charttwo'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import ChartThree from '../../components/charts/ChartThree'

export default function Home() {
  return (
    <>
    <Topbar />
    <Navbar />

    <div className="container-fluid py-3">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 crypto_market_caps_box">
                <h4>
                <img src="assets/images/img-dominance.jpg" width="25px" /> BTC Dominance
                </h4>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Today</th>
                    <th scope="col">Yesterday</th>
                    <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>42.534%</td>
                    <td>42.430%</td>
                    <td>
                        <span style={{ color: "green" }}>0.104%</span>{" "}
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            {/*<div class="col-lg-3 crypto_market_caps_box">
                        <h4>ETH Dominance</h4>
                        <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Today</th>
                            <th scope="col">Yesterday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>15.423%</td>
                            <td>15.549%</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>*/}
            <div className="col-lg-4 crypto_market_caps_box">
                <h4>
                <img src="assets/images/img-market_cap.jpg" width="25px" /> Total Market Cap
                </h4>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Today</th>
                    <th scope="col">Yesterday</th>
                    <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>929.41B</td>
                    <td>951.7B</td>
                    <td>
                        <span style={{ color: "red" }}>-2.342%</span>{" "}
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="col-lg-4 crypto_market_caps_box">
                <h4>
                <img src="assets/images/img-total_volume.jpg" width="25px" /> Total Volume
                </h4>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Today</th>
                    <th scope="col">Yesterday </th>
                    <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>56.62B</td>
                    <td>62.28B</td>
                    <td>
                        <span style={{ color: "red" }}>-9.083%</span>{" "}
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            <div className="row mt20">
            <div className="col-lg-4 crypto_market_caps_box">
                <h4>
                <img src="assets/images/img-inflow.jpg" width="25px" /> Inflows Data(BTC)
                <a href="inflow-data.html" className="all">
                    All
                </a>
                </h4>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Today</th>
                    <th scope="col">Yesterday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        14611{" "}
                        <a
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#inflow_data_model"
                        className="inflow_clicks"
                        data-id="finalTInflow"
                        >
                        (Show Details)
                        </a>
                        <div id="finalTInflow" style={{ display: "none" }}>
                        <p>
                            🚨🚨🚨 14,611.15 #BTC ($304,497,518) aggregated inflows to
                            #Gemini
                        </p>
                        </div>
                    </td>
                    <td>
                        4502
                        <a
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#inflow_data_model"
                        className="inflow_clicks"
                        data-id="finalYInflow"
                        >
                        (Show Details)
                        </a>
                        <div id="finalYInflow" style={{ display: "none" }}>
                        <p>
                            🚨🚨🚨 4,502.70 #BTC ($95,456,555) aggregated inflows to
                            #Coinbase Pro
                        </p>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="col-lg-8 top_exchanges">
                <h4>
                <img src="assets/images/img-exchanges.jpg" width="25px" /> Top Exchanges
                &amp; Volume(BTC)
                </h4>
                <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                    <th scope="col">
                        <img src="assets/images/small-binance.jpg" width="25px" />
                        Binance{" "}
                    </th>
                    <th scope="col">
                        <img
                        src="assets/images/small-Coinbase_Coin_Primary.png"
                        width="25px"
                        />
                        Coinbase Exchange{" "}
                    </th>
                    <th scope="col">
                        <img src="assets/images/small-F.png" width="25px" />
                        FTX{" "}
                    </th>
                    <th scope="col">
                        <img
                        src="assets/images/small-1481589873352_.pic_hd.jpg"
                        width="25px"
                        />
                        Huobi Global{" "}
                    </th>
                    <th scope="col">
                        <img src="assets/images/small-kucoin.png" width="25px" />
                        KuCoin{" "}
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>434.37K</td>
                    <td>68.32K</td>
                    <td>63.64K</td>
                    <td>57.68K</td>
                    <td>57.14K</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            <div className="row mt20">
            <div className="col-lg-6 fng_box">
                <img
                src="https://alternative.me/crypto/fear-and-greed-index.png"
                className="img-fluid"
                alt="Latest Crypto Fear & Greed Index" 
                />
            </div>
            <div className="col-lg-6 fear_grid_index_box">
            <TechnicalAnalysis colorTheme="light" width="100%" height="422"  symbol="HUOBI:BTCUSDT" showIntervalTabs="true" locale="en"></TechnicalAnalysis>
          
            </div>
            </div>
            <div className="row heatmap mt20">
            <div className="col-lg-12">
                <ChartThree />

            </div>
            </div>
            <div className="row heatmap mt20">
            <div className="col-lg-12">
                <Charttwo />

            </div>
            </div>
            <div className="row mt20 market_tickers_box">
            <div className="col-lg-6 market_tickers market_tickers_gainers">
                <h4>
                <img src="assets/images/img-gainers.jpg" width="25px" /> Top 3 Altcoins
                Gainers - USDT (24H)
                </h4>
                <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Low</th>
                    <th scope="col">High</th>
                    <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>APE</td>
                    <td>4.942900</td>
                    <td>4.734300</td>
                    <td>5.258900</td>
                    <td className="change">3.16%</td>
                    </tr>
                    <tr>
                    <td>FLOW</td>
                    <td>1.727500</td>
                    <td>1.638300</td>
                    <td>1.775700</td>
                    <td className="change">3.02%</td>
                    </tr>
                    <tr>
                    <td>MANA</td>
                    <td>0.953500</td>
                    <td>0.920200</td>
                    <td>1.005800</td>
                    <td className="change">0.74%</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="col-lg-6 market_tickers market_tickers_loser">
                <h4>
                <img src="assets/images/img-loser.jpg" width="25px" /> Top 3 Altcoins Losers
                - USDT (24H)
                </h4>
                <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Low</th>
                    <th scope="col">High</th>
                    <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>ATOM</td>
                    <td>7.632300</td>
                    <td>7.507800</td>
                    <td>8.219000</td>
                    <td className="change">-7.14%</td>
                    </tr>
                    <tr>
                    <td>DOT</td>
                    <td>7.573100</td>
                    <td>7.470600</td>
                    <td>7.949900</td>
                    <td className="change">-4.71%</td>
                    </tr>
                    <tr>
                    <td>AVAX</td>
                    <td>19.148500</td>
                    <td>18.727300</td>
                    <td>20.088600</td>
                    <td className="change">-4.13%</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            <div className="row mt20 market_tickers_box">
            <div className="col-lg-6 market_tickers market_tickers_gainers">
                <h4>
                <img src="assets/images/img-gainers.jpg" width="25px" /> Top 3 Gainers - USDT
                (24H)
                </h4>
                <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Low</th>
                    <th scope="col">High</th>
                    <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>VALUE</td>
                    <td>0.555400</td>
                    <td>0.205200</td>
                    <td>0.592600</td>
                    <td className="change">166.76%</td>
                    </tr>
                    <tr>
                    <td>HIVE</td>
                    <td>0.617800</td>
                    <td>0.420500</td>
                    <td>0.665200</td>
                    <td className="change">34.86%</td>
                    </tr>
                    <tr>
                    <td>AST</td>
                    <td>0.114000</td>
                    <td>0.084700</td>
                    <td>0.147900</td>
                    <td className="change">30.73%</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className="col-lg-6 market_tickers market_tickers_loser">
                <h4>
                <img src="assets/images/img-loser.jpg" width="25px" /> Top 3 Losers - USDT
                (24H)
                </h4>
                <table className="table table-bordered table-responsive">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Low</th>
                    <th scope="col">High</th>
                    <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>COL</td>
                    <td>0.714400</td>
                    <td>0.618300</td>
                    <td>0.903100</td>
                    <td className="change">-20.89%</td>
                    </tr>
                    <tr>
                    <td>USTC</td>
                    <td>0.017700</td>
                    <td>0.016800</td>
                    <td>0.025000</td>
                    <td className="change">-16.51%</td>
                    </tr>
                    <tr>
                    <td>UPI</td>
                    <td>0.018900</td>
                    <td>0.018400</td>
                    <td>0.028900</td>
                    <td className="change">-15.63%</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>

    <Footer />

    </>
  )
}
