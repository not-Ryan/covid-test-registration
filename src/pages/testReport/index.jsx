import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import axios, { useRequest } from '../../helpers/axios';

import PatientInfo from './patientInfo/index';
import ReservationInfo from './reservationInfo/index';
import TestInfo from './testInfo/index';

export default function TestReport(reservationId) {
    const resId = Object.values(reservationId);
    const reservation = useRequest('http://161.97.164.207:8080/reservations/' + resId);
    if (!reservation) {
        return null;
    }

    const allUserInformation = reservation;
    const fullName = allUserInformation.first_name + ' ' + allUserInformation.last_name;

    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            // { label: 'Tested people', path: '/tested-people/all' },
                            { label: 'Test Report', path: '/', active: true },
                        ]}
                        // title={fullName}
                    />
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                    {/* User information */}
                    <PatientInfo props={reservation.customer_id} />
                </Col>

                <Col lg={8}>
                    <Card>
                        <CardBody style={{ height: 258 }}>
                            <ReservationInfo props={reservation} />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody style={{ height: 258 }}>
                            <TestInfo props={reservation} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}
