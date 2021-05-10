import React from 'react';
import { Card, CardBody, Row, Col, Progress } from 'reactstrap';

import profileImg from '../../../assets/images/users/avatar-7.jpg';

const PatientInfo = () => {
    return (
        <Card className="">
            <CardBody className="profile-user-box">
                <Row>
                    <Col>
                        <div className="text-center mt-3">
                            <img src={profileImg} alt=""
                                className="avatar-lg rounded-circle" />
                            <h5 className="mt-2 mb-0">Shreyu N</h5>
                            <h6 className="text-muted font-weight-normal mt-2 mb-0">User Experience Specialist</h6>
                            <h6 className="text-muted font-weight-normal mt-1 mb-4">San Francisco, CA</h6>

                            <Progress className="mb-4" value={60} color="success" style={{ 'height': '14px' }}>
                                <span className="font-size-12 font-weight-bold">Your Profile is <span className="font-size-11">60%</span> completed</span>
                            </Progress>

                        </div>

                        <div className="mt-3 pt-2 border-top">
                            <h4 className="mb-3 font-size-15">Contact Information</h4>
                            <div>
                                <table className="table table-borderless mb-5 text-muted">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>xyz123@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone</th>
                                            <td>(123) 123 1234</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td>1975 Boring Lane, San Francisco, California, United States -
                                                            94108</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default PatientInfo;
