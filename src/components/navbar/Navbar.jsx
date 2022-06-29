import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
export default function Navbar() {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    return (
        <>
        {/* Navbar Start */}
        <div className="container-fluid p-0 mb-3">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
            <Link to={'/'} className="navbar-brand d-block d-lg-none ">
                <img src="assets/images/img-logo.png" />
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
                id="navbarCollapse"
            >
                <div className="navbar-nav mr-auto py-0">
                <Link to={'/'}  className={splitLocation[1] === "" ? "nav-item nav-link active" : "nav-item nav-link"}>
                    Home
                </Link>
                <Link to={'/inflow-data'} className={splitLocation[1] === "inflow-data" ? "nav-item nav-link active" : "nav-item nav-link"}>
                    Inflow Data
                </Link>
                <Link to={'/top-gainers-losers'} className={splitLocation[1] === "top-gainers-losers" ? "nav-item nav-link active" : "nav-item nav-link"}>
                    Top Gainers/Losers
                </Link>
                <Link to={'/news'} className={splitLocation[1] === "news" ? "nav-item nav-link active" : "nav-item nav-link"}>
                    News
                </Link>
                <Link to="/tradingview" className={splitLocation[1] === "tradingview" ? "nav-item nav-link active" : "nav-item nav-link"} >
                    Trading View
                </Link>
                {/* <Link to={'/'} className="nav-item nav-link">
                    Login
                </Link> */}
                </div>
                <div
                className="input-group ml-auto"
                style={{ width: "100%", maxWidth: 300 }}
                >
                <form
                    method="get"
                    className="searchform"
                    action={'/'}
                >
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Search News"
                    required=""
                    defaultValue=""
                    name="search"
                    />
                </form>
                </div>
            </div>
            </nav>
        </div>
        {/* Navbar End */}
        </>
    )
}
