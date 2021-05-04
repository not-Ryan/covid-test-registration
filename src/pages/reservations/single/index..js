import React, { Component } from 'react';
import { Row, Col, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import PageTitle from '../../../components/PageTitle';

class singleReservation extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: '2' };
        this.toggle = this.toggle.bind(this);
    }

    /**
     * Toggle the tab
     */
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    render() {
        const tabContents = [
            {
                id: '1',
                title: 'Normal',
                icon: 'uil-home-alt',
                text:
                    'Home - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
            {
                id: '2',
                title: 'Urgent',
                icon: 'uil-user',
                text:
                    'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
        ];

        return (
            <React.Fragment>
                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[{ label: 'Reservations', path: '/pages/starter', active: true }]}
                            title={'Today Reservations'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {/* tab pills */}
                        <Card>
                            <CardBody>
                                <h5 className="header-title mb-3 mt-0">List with all reservations today.</h5>

                                <Nav className="nav nav-pills navtab-bg nav-justified">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <NavItem key={index}>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({ active: this.state.activeTab === tab.id })}
                                                    onClick={() => {
                                                        this.toggle(tab.id);
                                                    }}>
                                                    <i
                                                        className={classnames(
                                                            tab.icon,
                                                            'd-sm-none',
                                                            'd-block',
                                                            'mr-1'
                                                        )}></i>
                                                    <span className="d-none d-sm-block">{tab.title}</span>
                                                </NavLink>
                                            </NavItem>
                                        );
                                    })}
                                </Nav>

                                <TabContent activeTab={this.state.activeTab}>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <TabPane tabId={tab.id} key={index}>
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-2">{tab.text}</p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        );
                                    })}
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default singleReservation;
