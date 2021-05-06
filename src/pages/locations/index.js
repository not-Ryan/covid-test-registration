import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Table, Button } from 'reactstrap';
//import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag, Calendar } from 'react-feather';

import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
//import { getLoggedInUser } from '../../helpers/authUtils';
import PageTitle from '../../components/PageTitle';

const records = [
    { id: 1, name: 'Carephar 1', address: 'teststraat', phone: '+31 12345678', opening: '8:00', closing: '4:00' },
    { id: 2, name: 'Carephar 2', address: 'teststraat', phone: '+31 12345678', opening: '8:00', closing: '4:00' },
    { id: 3, name: 'Carephar 3', address: 'teststraat', phone: '+31 12345678', opening: '8:00', closing: '4:00' },
    { id: 4, name: 'Carephar 4', address: 'teststraat', phone: '+31 12345678', opening: '8:00', closing: '4:00' },
    { id: 5, name: 'Carephar 5', address: 'teststraat', phone: '+31 12345678', opening: '8:00', closing: '4:00' },
    { id: 6, name: 'Carephar 6', address: 'teststraat', phone: '+31 12345678', opening: '8:00', closing: '4:00' },
];

class Locations extends Component {
    state = {
        allLocations: [],
    };

    componentDidMount() {
        // fetch('https://run.mocky.io/v3/6e21e10e-05fa-4f46-8b88-885b66611d8c')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         this.setState({ allLocations: data });

        //         console.log(this.state.allLocations);
        //     })
        //     .catch(console.log);
        this.fetchLocations();
    }

    fetchLocations = () => {
        Promise.all([fetch(`https://run.mocky.io/v3/6e21e10e-05fa-4f46-8b88-885b66611d8c`)])
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
                const locationRaw = data[0];
                this.setState({ allLocations: locationRaw });
            })
            .catch(function (error) {
                // if there's an error, log it
                console.log(error);
            });
    };

    render() {
        return (
            <React.Fragment>
                <div className="">
                    {/* preloader */}
                    {this.props.loading && <Loader />}

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
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Opening time</th>
                                                <th>Closing time</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.allLocations.map((record, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{record.id}</th>
                                                        <td>{record.name}</td>
                                                        <td>{record.address}</td>
                                                        <td>{record.phone}</td>
                                                        <td>{record.opening}</td>
                                                        <td>{record.closing}</td>
                                                        <td>
                                                            <Link to={`/reservations/view-location?id=` + record.id}>
                                                                <Button color="primary" className="width-xs">
                                                                    View
                                                                </Button>
                                                            </Link>
                                                        </td>
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
