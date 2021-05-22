import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
//import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';
import axios, { useRequest } from '../../helpers/axios';

import PatientInfo from './patientInfo';
import ReservationInfo from './reservationInfo';
import TestInfo from './testInfo';

export default function TestReport(reservationId) {
    const resId = Object.values(reservationId);

    const data = useRequest('http://161.97.164.207/reservations/' + resId);
    if (!data) {
        return null;
    }

    const allUserInformation = data;
    const fullName = allUserInformation.first_name + ' ' + allUserInformation.last_name;

    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            // { label: 'Tested people', path: '/tested-people/all' },
                            { label: "Test Report", path: '/', active: true },
                        ]}
                        // title={fullName}
                    />
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                    {/* User information */}
                    <PatientInfo props={allUserInformation} />
                </Col>

                <Col lg={8}>
                    <Card>
                        <CardBody>
                            <ReservationInfo />
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <TestInfo />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}
