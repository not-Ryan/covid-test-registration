import React, { Component } from 'react';
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Flatpickr from 'react-flatpickr'
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag, Calendar } from 'react-feather';

import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import OverviewWidget from '../../components/OverviewWidget';

class Locations extends Component {

    constructor(props) {
        super(props);

        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

        this.state = {
            user: getLoggedInUser(),
            filterDate: [oneWeekAgo, new Date()]
        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="">
                    { /* preloader */}
                    {this.props.loading && <Loader />}

                    <Row className="page-title align-items-center">
                        <Col sm={4} xl={6}>
                            <h4 className="mb-1 mt-0">Locations</h4>
                        </Col>
                        <Col sm={8} xl={6}>
                        </Col>
                    </Row>

                    {/* charts */}
                    <Row>
                        <Col xl={6}>
                            <p className="mb-1 mt-0">No locations yet.</p>
                        </Col>

                    </Row>

                </div>
            </React.Fragment>
        )
    }
}


export default Locations;