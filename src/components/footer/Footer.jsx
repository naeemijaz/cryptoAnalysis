import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <div className="container-fluid py-4 px-sm-3 px-md-5 bgwhite">
        <p className="m-0 text-center">
        <a className="font-weight-bold" href="about.html">
            About
        </a>{" "}
        |
        <Link to={'#!'}>
            <span
            className="__cf_email__"
            data-cfemail="0c6f7e7e757c78636d626d60757f657f4c6b616d6560226f6361"
            >
            [email&nbsp;protected]
            </span>
        </Link>
        <br /> Welcome to Bitcoin Analysis, world's first crypto analysis site for
        crypto lovers and learners.
        </p>
    </div>
    <Link to={'#!'} className="btn btn-dark back-to-top">
        <i className="fa fa-angle-up" />
    </Link>
    <div className="modal fade" id="inflow_data_model" role="dialog">
        <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Inflow Data</h4>
            </div>
            <div className="modal-body" id="inflow_data_body">
                Loading...
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
                </button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
