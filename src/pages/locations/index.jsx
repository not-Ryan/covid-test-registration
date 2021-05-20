import React from 'react';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import axios, { useRequest } from '../../helpers/axios';
// import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle';

export default function Locations() {
    const data = useRequest('http://161.97.164.207/locations');
    if (!data) {
        return null;
    }

    function fetchSchedules(schedules) {
        let finalSchedule = [];

        for (const key in schedules) {
            const times = '';
            if (Object.hasOwnProperty.call(schedules, key)) {
                const element = schedules[key];
                const time = JSON.stringify(element, ['opening_time', 'closing_time']);
                times = time;

                // Object.entries(element).map(([key, val]) =>
                //     finalSchedule.push(
                //         <p key={key}>
                //             {key}: {val}
                //         </p>
                //     )
                // );
            }
            finalSchedule.push(
                <p key={key}>
                    {key} - {times}
                </p>
            );
        }
        return <div>{finalSchedule}</div>;
    }

    //console.log(schedule);

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
                                            <th>Schedule</th>
                                            {/* <th>Address</th>
                                                <th>Phone</th>
                                                <th>Actions</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((record, index) => {
                                            let schedules = record.schedule;

                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{record.location_id}</th>
                                                    <td>{record.location_name}</td>
                                                    <td>{fetchSchedules(schedules)}</td>
                                                    {/* <td>
                                                            <Link to={`/view-location?id=` + record.id}>
                                                                <Button color="primary" className="width-xs">
                                                                    View
                                                                </Button>
                                                            </Link>
                                                        </td> */}
                                                </tr>
                                            );
                                        })}
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
