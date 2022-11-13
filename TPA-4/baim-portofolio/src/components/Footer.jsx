import React from 'react';

const Footer = () => {
    return (
        <>
        <div className="container-fluid mt-5 bg-secondary bg-opacity-25">
            <div className="row">
                <div className="col-md-7 text-center mt-5 mx-auto">
                    <h3 className='display-5 mb-3'>Get In Touch 👋</h3>
                    <p>I am open to all discussions, such as social connections, project discussions, etc. I'm also currently open to freelance projects, even I'm always actively looking for full-time job opportunities. If you get interested to collaborate with me, let's get in touch 💌</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 mx-auto text-center mt-4">
                <a href="mailto:ivanar6542@gmail.com" type="button" className="btn btn-primary col-9"><strong>Email</strong></a>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 text-center mb-4">
                <a href="https://github.com/dryxoxo/"><i className="fa-brands fa-github fa-2x" style={{color: "black"}}></i></a>
                <a href="https://instagram.com/baimavicenna"><i className="fa-brands fa-instagram fa-2x mx-2" style={{color: "black"}}></i></a>
                <a href="https://linkedin.com/ibrohimhuzaimi"><i className="fa-brands fa-linkedin fa-2x" style={{color: "black"}}></i></a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;