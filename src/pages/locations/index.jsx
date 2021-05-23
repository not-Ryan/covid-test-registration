import React from 'react';
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap';
import { useRequest } from '../../helpers/axios';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from 'react-router-dom';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import PageTitle from '../../components/PageTitle';

const sizePerPageRenderer = ({ options, currSizePerPage, onSizePerPageChange }) => (
    <React.Fragment>
        <label className="d-inline mr-1">Show</label>
        <Input
            type="select"
            name="select"
            id="no-entries"
            className="custom-select custom-select-sm d-inline col-1"
            defaultValue={currSizePerPage}
            onChange={(e) => onSizePerPageChange(e.target.value)}>
            {options.map((option, idx) => {
                return <option key={idx}>{option.text}</option>;
            })}
        </Input>
        <label className="d-inline ml-1">entries</label>
    </React.Fragment>
);

function FetchCustomerInfo({ customerId, type }) {
    const customer = useRequest('http://161.97.164.207/customers/' + customerId);

    if (!customer) {
        return <span>Loading...</span>;
    } else if (type === 'first_name') {
        return customer.first_name;
    } else if (type === 'date_of_birth') {
        return customer.date_of_birth;
    } else if (type === 'last_name') {
        return customer.last_name;
    } else if (type === 'passport_number') {
        return customer.passport_number;
    }
}

function scheduleFormatter(cell, row, rowIndex) {
    let schedule = [];
    let openingTime = '';
    let closingTime = '';

    for (const day in row.schedule) {
        if (Object.hasOwnProperty.call(row.schedule, day)) {
            const timesRaw = row.schedule[day];

            if (timesRaw) {
                openingTime = timesRaw.opening_time;
                closingTime = timesRaw.closing_time;
            } else {
                openingTime = '';
                closingTime = '';
            }
        }

        schedule.push(
            <div className="text-left text-capitalize mb-2">
                <span>{day}</span>
                <span style={{ float: 'right' }}>
                    {openingTime} - {closingTime}
                </span>
            </div>
        );
    }

    return schedule;
}

function addActionsButton(cell, row, rowIndex) {
    return (
        <div className="text-left">
            {/* <Link to={`/test-result/` + row.location_id}>
                <Button color="primary" size="md">
                    View
                </Button>
            </Link> */}
        </div>
    );
}

const columns = [
    {
        dataField: 'location_id',
        text: '#',
        sort: true,
    },
    {
        dataField: 'location_name',
        text: 'Location name',
        sort: true,
    },
    {
        dataField: 'reservation_datetime',
        text: 'Schedule',
        sort: false,
        formatter: scheduleFormatter,
    },
    {
        dataField: 'actions',
        text: 'Actions',
        sort: false,
        formatter: addActionsButton,
    },
];

const defaultSorted = [
    {
        dataField: 'location_id',
        order: 'asc',
    },
];

const Table = () => {
    const locations = useRequest('http://161.97.164.207/locations');
    if (!locations) {
        return null;
    }
    const { SearchBar } = Search;

    return (
        <Card>
            <CardBody>
                <p className="sub-header">Here you can find all the locations</p>
                <ToolkitProvider
                    bootstrap4
                    keyField="location_id"
                    data={locations}
                    columns={columns}
                    search={{
                        searchFormatted: true,
                    }}
                    columnToggle>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col className="text-right">
                                    <SearchBar {...props.searchProps} />
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                //striped
                                hover
                                defaultSorted={defaultSorted}
                                pagination={paginationFactory({
                                    sizePerPage: 10,
                                    sizePerPageRenderer: sizePerPageRenderer,
                                    sizePerPageList: [
                                        { text: '10', value: 10 },
                                        { text: '50', value: 50 },
                                        { text: '100', value: 100 },
                                        { text: 'All', value: locations.length },
                                    ],
                                })}
                                wrapperClasses="table-responsive"
                            />
                        </React.Fragment>
                    )}
                </ToolkitProvider>
            </CardBody>
        </Card>
    );
};

const AllLocations = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[{ label: 'All locations', path: '/pages/starter', active: true }]}
                        title={'All Locations'}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Table />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AllLocations;
