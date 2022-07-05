import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'

export default function Topgainerlooser() {


    const [TopGainer, setTopGainer] = useState([]);
    const [TopLooser, setTopLooser] = useState([]);

    useEffect(() => {

        axios.get(`https://qberg.mn/api/fetchCryptoFirstData`,{
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(res => {
            const response = res.data;
            setTopGainer(response.data.altcoinsGainers);
            setTopLooser(response.data.altcoinsLosers);
            
        })
    },[]);

    

return (
<>
    <Topbar />
    <Navbar />
    <div className="container-fluid py-3">
        <div className="container">
            <div className="row overlay position-relative bg-light">
                <div className="col-lg-12">
                    <h3 className="m-0">Top 15 Gainers - Losers Altcoins</h3>
                </div>
            </div>
            <div className="row overlay position-relative bg-light mt20">
                <div className="col-lg-12">
                    <div className="row mt20 market_tickers_box">
                        <div className="col-lg-6 market_tickers market_tickers_gainers">
                            <h4>
                                <img src="https://crryptoanalysis.com/img/gainers.jpg" width="25px" alt='btc' />{" "}
                                Top 15 Altcoins Gainers - USDT (24H)
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
                                
                                {Object.values(TopGainer).map((items,key)=>{
                                    
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
                                <img src="https://crryptoanalysis.com/img/loser.jpg" alt='btc' width="25px" />{" "}
                                Top 15 Altcoins Losers - USDT (24H)
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
                                
                                {Object.values(TopLooser).map((items,key)=>{
                                    
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
        </div>
    </div>

    <Footer />
</>
)
}