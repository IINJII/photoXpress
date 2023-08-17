import React, { useContext } from 'react'
import {
    Link, useLocation,
  } from "react-router-dom";
import photoContext from '../context/photos/photoContext';

const Navbar = (props) => {
    const context = useContext(photoContext);
    const {callApi} = context;
    const location = useLocation();
    const {query, setQuery} = props;


    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }

    const handleOnClick = () => {
        callApi(query);
    }

    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span>photo</span><span>X</span><span>press</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/architecture' ? 'active' : ''}`} to="/architecture">Architecture</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/nature' ? 'active' : ''}`} to="/nature">Nature</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/abstract' ? 'active' : ''}`} to="/abstract">Abstract</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" onChange={handleOnChange} aria-label="Search" />
                            <Link to='/search'><button onClick={handleOnClick} className="btn btn-outline-warning" type="submit">Search</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar
