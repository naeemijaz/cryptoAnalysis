import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'

export default function News() {
return (
<>
    <Topbar />
    <Navbar />
    <div className="container-fluid py-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                <h3 className="m-0">
                                    News Headlines (
                                    <span className="subheading">
                                        <i>We crawl the web and news sites for you.</i>
                                    </span>
                                    )
                                </h3>
                            </div>
                        </div>
                        <div className="col-6">
                            <a className="twitter-timeline" data-height="650" href="https://twitter.com/AdsMarkaz?ref_src=twsrc%5Etfw">Tweets by AdsMarkaz</a> 
                            <Helmet>
                                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </Helmet>
                        </div>
                        <div className="col-6 bg-white">
                            <div loading="lazy" data-mc-src="325f2653-c759-4f94-9eb0-5f481262ff94#null"></div>
                            <Helmet>
                            <script  src="https://cdn2.woxo.tech/a.js#62c70ed94fd86c2e0db63013"  async data-usrc></script>
                            </Helmet>
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