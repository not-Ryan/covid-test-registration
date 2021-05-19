import React from 'react';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import axios, { useRequest } from '../../helpers/axios';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle';

export default function Locations() {
    const data = useRequest('http://161.97.164.207/locations');
    if (!data) {
        return null;
    }else{
        console.log(data);
    }

    return (
        <React.Fragment>
            <div className="">
                {/* preloader */}
                {/* {this.props.loading && <Loader />} */}

                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[{ label: 'Locations', path: '/pages/starter', active: true }]}
                            title={'All Locations'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card>
                            <CardBody>
                                <p className="sub-header">Here you will find all the Carephar locations</p>

                                <Table className="mb-0" hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Opening time</th>
                                            <th>Closing time</th>
                                            {/* <th>Address</th>
                                                <th>Phone</th>
                                                <th>Actions</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {this.state.allLocations.map((record, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{record.location_id}</th>
                                                        <td>{record.location_name}</td>
                                                        <td>{record.opening_time}</td>
                                                        <td>{record.closing_time}</td>
                                                        <td>
                                                            <Link to={`/view-location?id=` + record.id}>
                                                                <Button color="primary" className="width-xs">
                                                                    View
                                                                </Button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })} */}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}
