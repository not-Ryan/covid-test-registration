import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import './styles.css';

const PatientInfo = ({props}) => {

    return (
        <Card className="">
            <CardBody className="profile-user-box">
                <Row>
                    <Col>
                        <div className="mb-2">
                            <h4 className="mb-2 mt-3 font-size-16 font-weight-bold">Personal Information</h4>
                            <div>
                                <table className="table table-borderless text-muted">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Firstname</th>
                                            <td>{props.first_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Lastname</th>
                                            <td>{props.last_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Date of birth</th>
                                            <td>{props.date_of_birth}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Gender</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Paspoort ID</th>
                                            <td>{props.passport_number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ID nummer</th>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="pt-2 border-top">
                            <h4 className="mb-2 mt-3 font-size-16 font-weight-bold">Contact Information</h4>
                            <div>
                                <table className="table table-borderless mb-5 text-muted">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>{props.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone</th>
                                            <td>{props.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td>{props.address}</td>
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
