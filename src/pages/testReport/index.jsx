import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import axios, { useRequest } from '../../helpers/axios';

import PatientInfo from './patientInfo/index';
import ReservationInfo from './reservationInfo/index';
import TestInfo from './testInfo/index';

export default function TestReport(reservationId) {
    const access_token =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjMtcUI4c2xWbXNxdUkwY0V4clBBYiJ9.eyJpc3MiOiJodHRwczovL2NhcmVwaGFyLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJMeW1hQ0NVUmVhUGM5V0FqUXlXWElKZjJKdzdIWHpLNkBjbGllbnRzIiwiYXVkIjoiY2FyZXBoYXJzaXRlIiwiaWF0IjoxNjIyMDUxMzQwLCJleHAiOjE2MjIxMzc3NDAsImF6cCI6Ikx5bWFDQ1VSZWFQYzlXQWpReVdYSUpmMkp3N0hYeks2Iiwic2NvcGUiOiJyZWFkOmN1c3RvbWVycy5hbGwgcmVhZDpjdXN0b21lcnMgd3JpdGU6Y3VzdG9tZXJzIHJlYWQ6cmVzZXJ2YXRpb25zLmFsbCByZWFkOnJlc2VydmF0aW9ucyB3cml0ZTpyZXNlcnZhdGlvbnMgd3JpdGU6bG9jYXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOlsicmVhZDpjdXN0b21lcnMuYWxsIiwicmVhZDpjdXN0b21lcnMiLCJ3cml0ZTpjdXN0b21lcnMiLCJyZWFkOnJlc2VydmF0aW9ucy5hbGwiLCJyZWFkOnJlc2VydmF0aW9ucyIsIndyaXRlOnJlc2VydmF0aW9ucyIsIndyaXRlOmxvY2F0aW9ucyJdfQ.YWP2iMkS7TYkwjJp86EbiWoRNr-D6FJsgqn0j9Qsx2tViIqhQFa_FO79xZZxQSY1mUQGzNPhzO-NASSH0ewk-SADAgbK7lAxhSC7VjEHrY6ZYIQDKT5xXORxn9ie1rGdHuJFPmhBjnDA-S0fN_0ijE_9juYFJ030H1s9K8j2dxX9G37sNtyAjB1tHaDkGAh4FnGSsboZvRJdKpoFBGoHmFjXGFGTatjWf8vq38jdHT01ViPOiyiXXkTv6sg4qQhb9NnTA2iS7P9lI9w9w0o9k5j-rIpkn-NQ9j2zDoyeA29fDFTmKj-17wbNbUEof6J0yPmL3cSJn5srrcBGxxjU3A';

    //const [reservation, setReservationInfo] = useState(0);
    const resId = Object.values(reservationId);
    const reservation = useRequest('http://161.97.164.207/reservations/3');
    if (!reservation) {
        return null;
    }

    // useEffect(() => {
    //     axios
    //         .get('http://161.97.164.207/reservations/' + resId, {
    //             headers: {
    //                 Authorization: `Bearer ${access_token}`,
    //             },
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    const getReservation = (access_token, resId) => {
        axios
            .get('http://161.97.164.207/reservations/' + resId, {
                headers: {
                    Authorization: 'Bearer ' + access_token,
                },
            })
            .then((response) => {
                let locationsResponse = response.data;
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const allUserInformation = reservation;
    // const fullName = allUserInformation.first_name + ' ' + allUserInformation.last_name;

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
