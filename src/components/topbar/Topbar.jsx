import React from 'react'
import { Link } from 'react-router-dom';
export default function Topbar() {
  return (
    <>
    {/* Topbar Start */}
    <div className="container-fluid">
    <div className="row align-items-center py-2 px-lg-5">
        <div className="col-lg-4">
        <Link to={'/'} className="navbar-brand d-none d-lg-block">
            <img src="assets/images/img-logo.png" />
        </Link>
        </div>
        <div className="col-lg-8 text-center text-lg-right">
        </div>
    </div>
    </div>
    {/* Topbar End */}
    </>
  )
}
