import React from 'react'
import BarChart from '../../components/charts/BarChart'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Topbar from '../../components/topbar/Topbar'

export default function Inflowdata() {
  return (
    <>
    <Topbar />
    <Navbar />

    <div className="container-fluid py-3">
        <div className="container">
            <div className="row overlay position-relative bg-light">
            <div className="col-lg-12">
                <h3 className="m-0">Inflows Data</h3>
            </div>
            </div>
            <div className="row overlay position-relative bg-light mt20">
            <div className="col-lg-12">
            <BarChart />
            </div>
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}
