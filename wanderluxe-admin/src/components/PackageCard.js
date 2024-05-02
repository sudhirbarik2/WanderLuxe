import React from 'react';

function PackageCard({ packageData }) {
  return (
    <div className="row" >
      {packageData.map((pkg) => (
        <div className="col-md-3 mb-4"  key={pkg.destinationId}>
          <div className="card" style={{height:"380px"}}>
            <img src={"http://localhost:4000/"+pkg.imageUrl} className="card-img-top" alt={pkg.name} style={{height:"35%"}} />
            <div className="card-body">
              <h5 className="card-title" style={{height:"37%"}}>{pkg.name}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Continent: {pkg.continent}</li>
                
              </ul>
              <button className="btn btn-danger mt-3">Delete this package</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PackageCard;
