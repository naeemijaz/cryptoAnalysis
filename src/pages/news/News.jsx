import React from 'react'
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
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <Footer />
</>
)
}