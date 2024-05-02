import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import PackageCard from './PackageCard';
import { backendUrlPackage, backendUrlBooking } from '../BackendURL';

function RemovePkg() {

    const [packages, setPackages] = useState([])
    const [error, setError] = useState()

    const getHotDeals = () => {
        // this.setState({ spinnerStatus: true })
        axios.get(backendUrlPackage + "/destinations")
            .then((response) => {
                setPackages(response.data)
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    useEffect(() => {
        getHotDeals()
    }, []);
    console.log(packages);
    console.log(backendUrlPackage + "/destinations");
    return (
        <div>
            <div className="container">
                <PackageCard packageData={packages} />
            </div>
        </div>
    );
}

export default RemovePkg;
