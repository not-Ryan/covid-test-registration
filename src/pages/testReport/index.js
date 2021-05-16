import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
//import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';

import PatientInfo from './patientInfo';
import ReservationInfo from './reservationInfo';
import TestInfo from './testInfo';

class TestReport extends Component {
    state = {
        allUserinformation: [],
    };

    componentDidMount() {
        this.fetchUserInformation();
    }

    fetchUserInformation = () => {
        //Promise.all([fetch(`https://run.mocky.io/v3/00fb586d-17f9-4465-b7ed-2907af12061a`)])
        Promise.all([fetch(`http://161.97.164.207/customers/100`)])
            .then(function (responses) {
                // Get a JSON object from each of the responses
                return Promise.all(
                    responses.map(function (response) {
                        return response.json();
                    })
                );
            })
            .then((data) => {
                // Log the data to the console
                // You would do something with both sets of data here
                this.setState({ allUserinformation: data[0] });
                //console.log(this.state.allUserinformation);
            })
            .catch(function (error) {
                // if there's an error, log it
                console.log(error);
            });
    };

    render() {
        const allUserInformation = this.state.allUserinformation;
        const fullName = allUserInformation.first_name + ' ' + allUserInformation.last_name;

        return (
            <React.Fragment>
                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[
                                { label: 'Tested people', path: '/tested-people/all' },
                                { label: fullName, path: '/', active: true },
                            ]}
                            title={fullName}
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
}

export default TestReport;
