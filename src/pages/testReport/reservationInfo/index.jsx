import React from 'react';
import { useRequest } from '../../../helpers/axios';
import Moment from 'react-moment';
import { Calendar } from 'react-feather';
const iconStyles = {
    fontSize: '22px',
};
const ReservationInfo = ({ props }) => {
    const location = useRequest('http://161.97.164.207/locations/' + props.location_id);
    if (!location) {
        return null;
    }
    console.log(location);
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
                        <h5 className="font-size-16"><Moment format="DD/MM/YYYY HH:mm">{props.date_of_birth}</Moment></h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-location-point text-primary" style={iconStyles}></i> Location
                        </p>
                        <h5 className="font-size-16">{location.location_name}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-euro-circle text-primary" style={iconStyles}></i> Paid amount
                        </p>
                        <h5 className="font-size-16">Euro {props.amount_paid}</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-receipt-alt text-primary mr-1" style={iconStyles}></i>
                            Paid method
                        </p>
                        <h5 className="font-size-16">{props.payment_method}</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ReservationInfo;
