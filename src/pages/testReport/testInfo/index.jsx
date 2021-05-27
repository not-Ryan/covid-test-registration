import React from 'react';
import { Badge } from 'reactstrap';
import { Info } from 'react-feather';

const iconStyles = {
    fontSize: '22px',
};
const TestInfo = ({ props }) => {
    let TestResult = 'Negative';
    let testTubeId = 'Not tested yet.';
    let resultTag = 'soft-danger';

    if (props.test_result) {
        TestResult = 'Positive';
    } else {
        TestResult = 'Negative';
    }

    if (props.test_tube_id) {
        testTubeId = props.test_tube_id;
    }

    if (props.test_result === true) {
        TestResult = 'Positive';
        resultTag = 'soft-success';
    }

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
                            <i className="uil-syringe text-primary" style={iconStyles}></i> Test Tube ID
                        </p>
                        <h5 className="font-size-14">{testTubeId}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-prescription-bottle text-primary" style={iconStyles}></i> Test Type
                        </p>
                        <h5 className="font-size-14 text-uppercase">{props.test_type}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-euro-circle text-primary" style={iconStyles}></i> Test cost
                        </p>
                        <h5 className="font-size-14">Euro {props.test_cost}</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-file-medical-alt text-primary" style={iconStyles}></i> Test Result
                        </p>
                        <h5 className="font-size-14">
                            <Badge color={resultTag}>{TestResult}</Badge>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TestInfo;
