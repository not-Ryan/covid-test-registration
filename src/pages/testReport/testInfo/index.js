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
                                <th scope="row">Test Status</th>
                                <td>Negative</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default TestInfo;
