import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classNames from 'classnames';
import PageTitle from '../../components/PageTitle';

import UserBox from './patientInfo';
import Activities from '../other/Profile/Activities';
import Messages from '../other/Profile/Messages';
import Projects from '../other/Profile/Projects';
import Tasks from '../other/Profile/Tasks';


class TestReport extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    /**
     * Toggles tab
     * @param {*} tab 
     */
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
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
                                <Nav className="nav nav-pills navtab-bg nav-justified">
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggleTab('1'); }}
                                        >Reservation</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggleTab('2'); }}
                                        >Test Information</NavLink>
                                    </NavItem>
                                    {/* <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '3' })}
                                            onClick={() => { this.toggleTab('3'); }}
                                        >Projects</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="#"
                                            className={classNames({ active: this.state.activeTab === '4' })}
                                            onClick={() => { this.toggleTab('4'); }}
                                        >Tasks</NavLink>
                                    </NavItem> */}
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        {/* <Activities /> */}
                                    </TabPane>
                                    <TabPane tabId="2">
                                        {/* <Messages /> */}
                                    </TabPane>
                                    <TabPane tabId="3">
                                        {/* <Projects /> */}
                                    </TabPane>
                                    <TabPane tabId="4">
                                        {/* <Tasks /> */}
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default TestReport;
