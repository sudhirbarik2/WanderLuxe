import React from 'react';
import '../register.css'
function Register() {
    return (
        <div className="container register-form" style={{paddingTop:"120px"}}>
            <div className="form">
                <div className="note">
                    <p>Create WanderLuxeAdmin account.</p>
                </div>

                <div className="form-content" >
                    <div className="row" style={{paddingBottom:"25px"}}>
                        <div className="col-md-6">
                            <div className="form-group" style={{paddingBottom:"15px"}}>
                                <input type="text" className="form-control" placeholder="Your Name *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone Number *" value="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group" style={{paddingBottom:"15px"}}>
                                <input type="text" className="form-control"  placeholder="Your Password *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Confirm Password *" value="" />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btnSubmit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
