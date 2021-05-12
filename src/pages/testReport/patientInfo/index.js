import React from 'react';
import { Card, CardBody, Row, Col, Progress } from 'reactstrap';

const PatientInfo = () => {
    return (
        <Card className="">
            <CardBody className="profile-user-box">
                <Row>
                    <Col>
                        <div className="text-center mt-3 mb-4" style={{ lineHeight: '125px' }}>
                            {/* <i className="uil uil-venus"></i> */}
                            <i
                                className="uil uil-mars"
                                style={{
                                    fontSize: '50px',
                                    padding: 30,
                                    borderRadius: '50%',
                                    backgroundColor: 'gray',
                                    color: 'white',
                                }}></i>
                            <h5 className="mt-2 mb-0">John Doe</h5>
                        </div>

                        <div className="pt-2 border-top">
                            <h4 className="mb-2 mt-3 font-size-15 font-weight-bold">Personal Information</h4>
                            <div>
                                <table className="table table-borderless text-muted">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Firstname</th>
                                            <td>John</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Lastname</th>
                                            <td>Doe</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Date of birth</th>
                                            <td>05/05/2021</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Gender</th>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Paspoort ID</th>
                                            <td>0450469</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ID nummer</th>
                                            <td>SF98347530</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="pt-2 border-top">
                            <h4 className="mb-2 mt-3 font-size-15 font-weight-bold">Contact Information</h4>
                            <div>
                                <table className="table table-borderless mb-5 text-muted">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>johndoe@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone</th>
                                            <td>+31 856646456</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td>Teststraat #222</td>
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
