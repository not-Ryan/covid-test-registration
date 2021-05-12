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
            </React.Fragment>
        );
    }
}

export default ReservationInfo;
