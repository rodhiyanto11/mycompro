import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                   
                                    <li class="nav-item">
                                        <Link class="nav-link smoothScroll" to="/home">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link smoothScroll" to="/contact">Contact</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link smoothScroll" to="/project">Portofolio</Link>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a href="#about" class="nav-link smoothScroll">Studio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#project" class="nav-link smoothScroll">Our Works</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog.html" class="nav-link">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="contact.html" class="nav-link contact">Contact</a>
                                    </li> */}
                                </ul>
                              
                            </div>
                       
                   </div>
                   </nav>

            </div>
        )
    }
}
