import React, { useEffect, useState } from 'react'
import Charttwo from '../../components/charts/Charttwo'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import ChartThree from '../../components/charts/ChartThree'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {

    const [btcDominance, setBtcDominance] = useState([]);
    const [totalMarketCap, setTotalMarketCap] = useState([]);
    const [totalVolume, setTotalVolume] = useState([]);
    const [inflowsDataBtc, setInflowsDataBtc] = useState([]);
    const [topExchangesVolumeBtc, settopExchangesVolumeBtc] = useState([]);
    const [top3AltcoinsGainers, settop3AltcoinsGainers] = useState([]);
    const [top3AltcoinsLlosers, settop3AltcoinsLlosers] = useState([]);
    const [top3GainersUsdt24, settop3GainersUsdt24] = useState([]);
    const [top3LosersUsdt24, settop3LosersUsdt24] = useState([]);

    useEffect(() => {

        axios.get(`https://qberg.mn/api/homePageAnalysis`,{
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(res => {
            const response = res.data;
            setBtcDominance(response.data.btc_dominance);
            setTotalMarketCap(response.data.total_market_cap);
            setTotalVolume(response.data.total_volume);
            setInflowsDataBtc(response.data.inflows_data_btc);
            settopExchangesVolumeBtc(response.data.top_exchanges_volume_btc);
            settop3AltcoinsGainers(response.data.top_3_altcoins_gainers);
            settop3AltcoinsLlosers(response.data.top_3_altcoins_losers);
            settop3GainersUsdt24(response.data.top_3_gainers_usdt_24);
            settop3LosersUsdt24(response.data.top_3_losers_usdt_24);
            
        })


    },[]);

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
                    {Object.values(btcDominance).map((items,key)=>{
                                        
                        return(
                            <>
                                <tr key={key}>
                                    {items.map((value, index)=>{    
                                        return<td key={index}>{value}</td>
                                    })}
                                    </tr>
                            </>
                        )
                    })}
                </tbody>
                </table>
            </div>
            
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
                    {Object.values(totalMarketCap).map((items,key)=>{
                                            
                        return(
                            <>
                                <tr key={key}>
                                    {items.map((value, index)=>{    
                                        return<td key={index}>{value}</td>
                                    })}
                                    </tr>
                            </>
                        )
                    })}
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
                    {Object.values(totalVolume).map((items,key)=>{
                                            
                        return(
                            <>
                                <tr key={key}>
                                    {items.map((value, index)=>{    
                                        return<td key={index}>{value}</td>
                                    })}
                                    </tr>
                            </>
                        )
                    })}
                </tbody>
                </table>
            </div>
            </div>
            <div className="row mt20">
            <div className="col-lg-4 crypto_market_caps_box">
                <h4>
                <img src="assets/images/img-inflow.jpg" width="25px" /> Inflows Data(BTC)
                <Link to={'/inflow-data'} className="all">
                    All
                </Link>
                </h4>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Today</th>
                    <th scope="col">Yesterday</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(inflowsDataBtc).map((items,key)=>{
                                            
                        return(
                            <>
                                <tr key={key}>
                                    {items.map((value, index)=>{    
                                        return<td key={index}>{value.split('(S')[0]}</td>
                                    })}
                                    </tr>
                            </>
                        )
                    })}
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
                    {Object.values(topExchangesVolumeBtc).map((items,key)=>{
                                            
                        return(
                            <>
                                <tr key={key}>
                                    {items.map((value, index)=>{    
                                        return<td key={index}>{value}</td>
                                    })}
                                    </tr>
                            </>
                        )
                    })}
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
                {Object.values(top3AltcoinsGainers).map((items,key)=>{
                                    
                    return(
                        <>
                            <tr key={key}>
                                {items.map((value, index)=>{    
                                    return<td key={index}>{value}</td>
                                })}
                                </tr>
                        </>
                    )
                })}
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
                {Object.values(top3AltcoinsLlosers).map((items,key)=>{
                                    
                    return(
                        <>
                            <tr key={key}>
                                {items.map((value, index)=>{    
                                    return<td key={index}>{value}</td>
                                })}
                                </tr>
                        </>
                    )
                })}
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
                {Object.values(top3GainersUsdt24).map((items,key)=>{
                                    
                    return(
                        <>
                            <tr key={key}>
                                {items.map((value, index)=>{    
                                    return<td key={index}>{value}</td>
                                })}
                                </tr>
                        </>
                    )
                })}
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
                {Object.values(top3LosersUsdt24).map((items,key)=>{
                                    
                    return(
                        <>
                            <tr key={key}>
                                {items.map((value, index)=>{    
                                    return<td key={index}>{value}</td>
                                })}
                                </tr>
                        </>
                    )
                })}
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
