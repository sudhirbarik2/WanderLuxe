import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import PackageCard from './PackageCard';
import { backendUrlPackage, backendUrlBooking } from '../BackendURL';

function RemovehotDeal() {

    const [packages, setPackages] = useState([])
    const [error, setError] = useState()
    const [id,setId]=useState()
    const [relode, setrelode]=useState(false)
    const [emptyFlag, setEmptyFlag]=useState(false)
    const getHotDeals = () => {
        // this.setState({ spinnerStatus: true })
        axios.get(backendUrlPackage + "/hotDeals")
            .then((response) => {
                setPackages(response.data)
                setrelode(!relode)
                setId('D0')
                if(response.data.length <=0){
                    setEmptyFlag(true)
                }
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    const takeID =(idd)=>{
        setId(idd)
        axios.delete(backendUrlPackage+"/hotDeals/"+idd)
        .then((response)=>{
            console.log("Deleted Successfull", response.data);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
    
    console.log(packages);
    console.log(id);
    console.log(emptyFlag);
    return (
        emptyFlag?<h2 className='text-warning'>Hey Admin !<br/>We do not have any HotDeal in out DataBase</h2>:
        <div>
            <div className="container">
                <PackageCard packageData={packages} setId={takeID} />
            </div>
        </div>
    );
}

export default RemovehotDeal;
