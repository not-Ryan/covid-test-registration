import React from 'react';
import axios, { useRequest } from '../../helpers/axios';
import moment from 'moment';
import Moment from 'react-moment';
import { startOfDay, endOfDay } from 'date-fns';
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Flatpickr from 'react-flatpickr';
import { ChevronDown, Mail, Printer, File, Users, Image, ShoppingBag, MapPin, Calendar } from 'react-feather';

import { getLoggedInUser } from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import OverviewWidget from '../../components/OverviewWidget';

import Statistics from './Statistics';
import RevenueChart from './RevenueChart';
import TargetChart from './TargetChart';
import SalesChart from './SalesChart';
import Orders from './Orders';
import Performers from './Performers';
import Tasks from './Tasks';
import Chat from './Chat';

export default function Dashboard() {
    //get current date
    const myCurrentDate = new Date();

    const startDate = startOfDay(myCurrentDate);
    const newStartDate = moment(startDate).format('YYYY-MM-DD HH:mm:ss');

    const endDate = endOfDay(myCurrentDate);
    const newEndDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss');

    const reservationsToday = useRequest(
        'http://161.97.164.207/reservations?offset=0&tested=false&start=' + newStartDate + '&end=' + newEndDate
    );
    const locations = useRequest('http://161.97.164.207/locations/');
    const reservations = useRequest('http://161.97.164.207/reservations/');
    
    if (!locations) {
        return null;
    }
    if (!reservationsToday) {
        return null;
    }
    if (!reservations) {
        return null;
    }

    console.log(reservationsToday);

    return (
        <React.Fragment>
            <div className="">
                <Row className="page-title align-items-center">
                    <Col sm={4} xl={6}>
                        <h4 className="mb-1 mt-0">Dashboard</h4>
                    </Col>
                    <Col sm={8} xl={6}>
                        {/* <form className="form-inline float-sm-right mt-3 mt-sm-0">
                                <div className="form-group mb-sm-0 mr-2">
                                    <Flatpickr value={this.state.filterDate}
                                        onChange={date => { this.setState({ filterDate: date }) }} options={{ mode: "range" }}
                                        className="form-control" />
                                </div>
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle color="primary" className="dropdown-toggle">
                                        <i className='uil uil-file-alt mr-1'></i>Download
                                            <i className="icon ml-1"><ChevronDown /></i>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Mail className="icon-dual icon-xs mr-2"></Mail>
                                            <span>Email</span>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Printer className="icon-dual icon-xs mr-2"></Printer>
                                            <span>Print</span>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <File className="icon-dual icon-xs mr-2"></File>
                                            <span>Re-Generate</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </form> */}
                    </Col>
                </Row>

                {/* stats */}
                {/* <Statistics></Statistics> */}

                {/* charts */}
                <Row>
                    <Col xl={6}>
                        <OverviewWidget
                            items={[
                                { title: reservationsToday.length, description: 'Reservations today', icon: Calendar },
                                { title: reservations.length, description: 'Reservations all', icon: Calendar },
                            ]}></OverviewWidget>
                    </Col>
                    <Col xl={6}>
                        <OverviewWidget
                            items={[
                                { title: locations.length, description: 'Locations', icon: MapPin },
                            ]}></OverviewWidget>
                    </Col>

                    {/* <Col xl={6}>
                            <RevenueChart />
                        </Col>
                        <Col xl={3}>
                            <TargetChart />
                        </Col> */}
                </Row>

                {/* charts */}
                {/* <Row>
                        <Col xl={5}>
                            <SalesChart />
                        </Col>
                        <Col xl={7}>
                            <Orders />
                        </Col>
                    </Row> */}

                {/* <Row>
                        <Col xl={4}>
                            <Performers />
                        </Col>
                        <Col xl={4}>
                            <Tasks />
                        </Col>
                        <Col xl={4}>
                            <Chat />
                        </Col>
                    </Row> */}
            </div>
        </React.Fragment>
    );
}
