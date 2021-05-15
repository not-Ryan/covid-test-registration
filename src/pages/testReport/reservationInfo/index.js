import React, { Component } from 'react';
import { Calendar } from 'react-feather';
const iconStyles = {
    fontSize: '22px',
};
class ReservationInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="border-bottom pb-3">
                    <label className="font-weight-bold d-inline header-title" style={{ verticalAlign: 'center' }}>
                        <Calendar
                            className="icon-dual icon-md mr-2"
                            style={{ verticalAlign: 'center' }}
                            data-feather="hard-drive"></Calendar>
                        Reservation
                    </label>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-calender text-primary" style={iconStyles}></i> Reservation date
                            </p>
                            <h5 className="font-size-16">15 July, 2019</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-location-point text-primary" style={iconStyles}></i> Location
                            </p>
                            <h5 className="font-size-16">Carephar 1</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-euro-circle text-primary" style={iconStyles}></i> Paid amount
                            </p>
                            <h5 className="font-size-16">Euro 89,99</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-receipt-alt text-primary mr-1" style={iconStyles}></i> 
                                Paid method
                            </p>
                            <h5 className="font-size-16">PIN</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ReservationInfo;
