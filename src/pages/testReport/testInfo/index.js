import React, { Component } from 'react';
import { Info } from 'react-feather';
class TestInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="border-bottom pb-3">
                    <label className="font-weight-bold d-inline header-title" style={{ verticalAlign: 'center' }}>
                        <Info
                            className="icon-dual icon-md mr-2"
                            style={{ verticalAlign: 'center' }}
                            data-feather="hard-drive"></Info>
                        Test
                    </label>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-calender text-danger"></i> Test Tube ID
                            </p>
                            <h5 className="font-size-16">753JSKK</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-calendar-slash text-danger"></i> Test Type
                            </p>
                            <h5 className="font-size-16">15 July, 2019</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-dollar-alt text-danger"></i> Test Cost
                            </p>
                            <h5 className="font-size-16">Euro 89,99</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="mt-4">
                            <p className="mb-2">
                                <i className="uil-user text-danger"></i> Test Result
                            </p>
                            <h5 className="font-size-16">Negtive</h5>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <th scope="row">Test tube id</th>
                                <td>test_tube_id</td>
                            </tr>
                            <tr>
                                <th scope="row">Test type</th>
                                <td> test_type</td>
                            </tr>
                            <tr>
                                <th scope="row">Test cost</th>
                                <td>test_cost</td>
                            </tr>
                            <tr>
                                <th scope="row">Test result</th>
                                <td>test_result</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default TestInfo;
