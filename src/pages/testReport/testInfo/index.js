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
