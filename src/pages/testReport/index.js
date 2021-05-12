import React, { Component } from 'react';
import { Row, Col, Card, CardBody} from 'reactstrap';
//import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';

import UserBox from './patientInfo';
import ReservationInfo from './reservationInfo';
import TestInfo from './testInfo';

class TestReport extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '1',
        };
    }

    /**
     * Toggles tab
     * @param {*} tab
     */
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[
                                { label: 'Tested people', path: '/tested-people/all' },
                                { label: 'John doe', path: '/', active: true },
                            ]}
                            title={'John Doe'}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col lg={4}>
                        {/* User information */}
                        <UserBox />
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
