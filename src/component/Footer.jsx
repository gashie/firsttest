import React from 'react'

const Footer = () => {
    return (
        <>
        <footer className="text-light">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3">
                <h5>About</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <p className="mb-0">
                    Online Auction
                </p>
            </div>


            

            <div className="col-md-4 col-lg-3 col-xl-3">
                <h5>Contact</h5>
                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"/>
                <ul className="list-unstyled">
                    <li><i className="fa fa-home mr-2"></i> Scopic</li>
                    <li><i className="fa fa-envelope mr-2"></i> info@Scopic.com</li>
                    <li><i className="fa fa-phone mr-2"></i> + 33 12 14 15 16</li>
                    <li><i className="fa fa-print mr-2"></i> + 33 12 14 15 16</li>
                </ul>
            </div>
            <div className="col-12 copyright mt-3">
                <p className="float-left">
                    <a href="#">Back to top</a>
                </p>
           </div>
        </div>
    </div>
</footer>
            
        </>
    )
}

export default Footer