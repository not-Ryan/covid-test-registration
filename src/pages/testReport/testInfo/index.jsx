import React, { Component } from 'react';
import { Info } from 'react-feather';

const iconStyles = {
    fontSize: '22px',
};
const TestInfo = ({ props }) => {
    let TestResult = '';
    
    if (props.test_result) {
        TestResult = 'Positive';
    } else {
        TestResult = 'Negative';
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
                        <h5 className="font-size-16">{props.test_tube_id}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-prescription-bottle text-primary" style={iconStyles}></i> Test Type
                        </p>
                        <h5 className="font-size-16">{props.test_type}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-euro-circle text-primary" style={iconStyles}></i> Test cost
                        </p>
                        <h5 className="font-size-16">Euro {props.test_cost}</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-file-medical-alt text-primary" style={iconStyles}></i> Test Result
                        </p>
                        <h5 className="font-size-16">{TestResult}</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TestInfo;
