import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { useRequest } from '../../../helpers/axios';
import './styles.css';

const PatientInfo = ({ props }) => {
    const customer = useRequest('http://161.97.164.207/customers/' + props);
    if (!customer) {
        return null;
    }

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
                                            <td>{customer.first_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Lastname</th>
                                            <td>{customer.last_name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Date of birth</th>
                                            <td>{customer.date_of_birth}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Gender</th>
                                            <td>{customer.sex}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Paspoort ID</th>
                                            <td>{customer.passport_number}</td>
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
                                            <td>{customer.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone</th>
                                            <td>{customer.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td>{customer.address}</td>
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
