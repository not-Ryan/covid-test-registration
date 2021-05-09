import React, { Component } from 'react';
import { Row, Col, Card, CardBody} from 'reactstrap';
// import classnames from 'classnames';

import PageTitle from '../../../components/PageTitle';

class singleLocation extends Component {
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
        const reservationId = new URLSearchParams(window.location.search).get('id');

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

        //const thisProduct = productsData.find(prod => prod.id === productId)

        return (
            <React.Fragment>
                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[{ label: 'Reservations', path: '/pages/starter', active: true }]}
                            title={'Location info'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {/* tab pills */}
                        <Card>
                            <CardBody>
                                <h5 className="header-title mb-3 mt-0">
                                    This is where all the information will be. Just you wait. Reservation ID:{' '}
                                    {reservationId}
                                </h5>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default singleLocation;
