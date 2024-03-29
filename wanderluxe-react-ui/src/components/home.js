import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import HotDeals from './hotdeals'
import Axios from 'axios';
//import {backendUrlUser,backendUrlPackage,backendUrlBooking} from '../BackendURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Home extends Component {

    state = {
        continent: "",
        packagePage: false,
        successMessage: "",
        homePage: "",
        emailId: "",
        country: null,
        city: null,
        region: '',
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    }

    handleClick = (event) => {
        event.preventDefault();
        // const target = event.target;
        // const name = target.name;
        // const value = target.value;
        // console.log(name,value);
        // if (value === '') {
        //     this.setState({ successMessage: "Please Enter a mail" });
        // }
        // else {
        toast("Thank you for subscribing. Updates will be sent to the subscribing Email ID",{
            position: 'top-center'
        })
        // this.setState({ successMessage: "Thank you for subscribing. Updates will be sent to the subscribing Email ID" });
        // alert("Thank you for subscribing. Updates will be sent to the subscribing Email ID")
        // }
    }

    getPackages = () => {
        sessionStorage.setItem('continent', this.state.continent);
        this.setState({ packagePage: true });
    }
    getPackagesByCountry = () => {
        sessionStorage.setItem('continent', this.state.country);
        console.log(sessionStorage.getItem('continent'),"Getting package by continent");
        this.setState({continent:this.state.country})
        this.setState({ packagePage: true });
        
    }
    componentDidMount() {
        let cityy, statee;
        // if (sessionStorage.getItem('userName') != null) {
        //     toast("Welcome "+sessionStorage.getItem('userName'),{
        //         position: 'top-center',
        //     })
        // }
        Axios.get('https://ipapi.co/json').then((loc) => {
            console.log(loc.data);
            cityy = loc.data.city;
            statee = loc.data.region;
            this.setState({ city: loc.data.city, state: loc.data.region, country: loc.data.country_name })

        }).then(() => {
            // console.log(this.city,this.state);

        }).catch((err) => {
            console.log(err);
            // console.log(this.state.city,this.state.region);
        })
    }
    render() {

        if (this.state.packagePage === true) return <Redirect to={'/packages/' + this.state.continent} />

        return (
            <div>
                <header className="masthead book-page" id="page-top">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">Wanderluxe</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">Where Every Journey Begins with Elegance</h2>
                            <h3 className='text-warning mx-auto mt-2 mb-5'>Want to check packages from <span className='navstyleBrand' style={{cursor:'pointer'}} onClick={this.getPackagesByCountry}>{this.state.country}</span>?</h3>
                            <div className="form-inline d-flex">
                                <input
                                    type="text"
                                    className="form-control-lg flex-fill"
                                    name="continent"
                                    value={this.state.continent}
                                    onChange={this.handleChange}
                                    id="continent"
                                    placeholder="Where?"
                                />&nbsp;
                                <button className="btn btn-outline-warning btnConfig mx-auto" onClick={this.getPackages}>Search</button>

                            </div>
                        </div>
                    </div>
                </header>

                <section id="about" className="about-section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-white mb-4">Unleash the traveller inside you</h2>
                                <p className="about-paragraph text-center">When someone makes a travel plan, the first few things they want to sort out, are flights, accommodation, and other amenities for a convenient holiday.
                                    To enjoy holidays, you want to have the basics taken care of, especially for family vacations and honeymoon trips.
                                    You want your accommodation, return flight bookings, meals of the days, and other traveling formalities sorted beforehand.
                                    At <Link to="/">wanderluxe</Link>, we take care of all the requirements to ensure that you get to enjoy the best of your holiday, exploring and experiencing the destination.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="hotDeals" className="hotDeals-section">
                    <HotDeals />
                    {/* <StaticPackage/> */}
                </section>

                <section id="signup" className="signup-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-lg-8 mx-auto text-center">
                                <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                                <form className="form-inline d-flex">
                                    <input
                                        type="email"
                                        className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                                        id="inputEmail"
                                        name="emailId"
                                        value={this.state.emailId}
                                        onChange={this.handleChange}
                                        placeholder="Enter email address..."
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-outline-warning btnConfig mx-auto"
                                        onClick={this.handleClick}
                                        disabled={!this.state.emailId}
                                    >
                                        Subscribe
                                    </button>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                        <br />
                        {this.state.successMessage ?
                            <span className="text-success text-center">{this.state.successMessage}</span> :
                            null}
                    </div>
                </section>


                <section className="contact-section bg-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <h4 className="text-uppercase m-0">Address</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50">Howrah, West Bengal, India</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <h4 className="text-uppercase m-0">Email</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50"><Link to="/home">mail.wanderluxe.com</Link></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <h4 className="text-uppercase m-0">Phone</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50">+91 1234123456</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Home;