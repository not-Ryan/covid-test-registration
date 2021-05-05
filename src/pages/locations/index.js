import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag, Calendar } from 'react-feather';

import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import OverviewWidget from '../../components/OverviewWidget';

const records = [
    { id: 1, firstName: 'Greeva', lastName: 'N', username: '@greeva' },
    { id: 2, firstName: 'Dhyani', lastName: 'B', username: '@dhyani' },
    { id: 3, firstName: 'Manu', lastName: 'B', username: '@mannat' },
    { id: 4, firstName: 'Nik', lastName: 'N', username: '@nikn' },
    { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', username: '@sn' },
];

class Locations extends Component {
    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()],
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="">
                    {/* preloader */}
                    {this.props.loading && <Loader />}

                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Locations</h4>
                        </Col>
                        <Col sm={8} xl={6}></Col>
                    </Row>

                    {/* charts */}
                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="header-title mt-0 mb-1">Hoverable Rows</h4>
                                    <p className="sub-header">
                                        Add <code>hover</code> attribute to enable a hover state on table rows
                                    </p>

                                    <Table className="mb-0" hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {records.map((record, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{record.id}</th>
                                                        <td>{record.firstName}</td>
                                                        <td>{record.lastName}</td>
                                                        <td>{record.username}</td>
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
}

export default Locations;
