import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';


const Reservations = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Reservations', path: '/pages/starter', active: true },
                        ]}
                        title={'Reservations'}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Reservations;
