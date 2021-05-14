import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Table, 
//Button 
} from 'reactstrap';

// import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle';
class Locations extends Component {
    state = {
        allLocations: [],
    };

    componentDidMount() {
        this.fetchLocations();
    }

    fetchLocations = () => {
        // Promise.all([fetch(`https://run.mocky.io/v3/6e21e10e-05fa-4f46-8b88-885b66611d8c`)])
        Promise.all([fetch(`http://161.97.164.207/locations`)])
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
                                                <th>Opening time</th>
                                                <th>Closing time</th>
                                                {/* <th>Address</th>
                                                <th>Phone</th>
                                                <th>Actions</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.allLocations.map((record, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{record.location_id}</th>
                                                        <td>{record.location_name}</td>
                                                        <td>{record.opening_time}</td>
                                                        <td>{record.closing_time}</td>
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
}

export default Locations;
