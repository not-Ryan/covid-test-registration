import React, { Component } from 'react';
import { Calendar } from 'react-feather';
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
                <div className="mt-2">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <th scope="row">reservation_datetime</th>
                                <td>05/05/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>location_id</td>
                            </tr>
                            <tr>
                                <th scope="row">Paid amount</th>
                                <td>amount_paid</td>
                            </tr>
                            <tr>
                                <th scope="row">Paid method</th>
                                <td>payment_method</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-calender text-danger"></i> Start Date
                            </p>
                            <h5 className="font-size-16">15 July, 2019</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-calendar-slash text-danger"></i> Due Date
                            </p>
                            <h5 className="font-size-16">15 July, 2019</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-dollar-alt text-danger"></i> Budget
                            </p>
                            <h5 className="font-size-16">$1325</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-user text-danger"></i> Owner
                            </p>
                            <h5 className="font-size-16">Rick Perry</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ReservationInfo;
