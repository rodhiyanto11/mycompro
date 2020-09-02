import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import Project from '../../pages/Project/Project';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const clasess = {
    fontFooter : {
        color : '#ffffff'
    }
}
export default class Layout extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/project" component={Project} />
                    </Switch>
                </Router>




                <footer class="site-footer">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
                                <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">Pekerjaan Sulit Serahkan kepada kami <strong>brands</strong> only.</h1>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
                                <h4 class="my-4 text-white" >Contact Info</h4>

                                <p class="mb-1 footer-icon">
                                    <i class="fa fa-phone mr-2 footer-icon"></i>
         +99 080 070 4224
       </p>

                                <p >
                                    <a class="footer-icon" href="#">
                                        <i class="fa fa-envelope mr-2 footer-icon"></i>
                                        <label class="footer-icon">hello@company.com</label>
         </a>
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
                                <h4 class="my-4 text-white">Our Studio</h4>

                                <p class="mb-1 footer-icon">
                                    <i class="fa fa-home mr-2 footer-icon"></i>
         Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
       </p>
                            </div>

                            <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
                                <p class="copyright-text text-white">Copyright &copy; 2020 Your Company
       <br />
                                </p>
                            </div>

                            <div class="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">

                                <ul class="footer-link" >
                                    <li><a style = {clasess.fontFooter} href="#">Stories</a></li>
                                    <li><a style = {clasess.fontFooter} href="#">Stories</a></li>
                                    <li><a style = {clasess.fontFooter} href="#">Stories</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
                                <ul class="social-icon">
                                    <li><a style = {clasess.fontFooter} href="#" class="fa fa-instagram"></a></li>
                                    <li><a style = {clasess.fontFooter} href="#" class="fa fa-twitter"></a></li>
                                    <li><a style = {clasess.fontFooter} href="#" class="fa fa-dribbble"></a></li>
                                    <li><a style = {clasess.fontFooter} href="#" class="fa fa-behance"></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>



            </div>
        )
    }
}
