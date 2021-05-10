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
                                <th scope="row">Date</th>
                                <td>05/05/2021</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>Carephar 3</td>
                            </tr>
                            <tr>
                                <th scope="row">Paid</th>
                                <td>150</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default ReservationInfo;
