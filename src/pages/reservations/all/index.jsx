import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    Button,
} from 'reactstrap';
import { useRequest } from '../../../helpers/axios';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from 'react-router-dom';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import PageTitle from '../../../components/PageTitle';

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

const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
    <UncontrolledDropdown className="mb-3">
        <DropdownToggle tag="button" className="btn btn-white">
            Select Columns <i className="uil uil-angle-down font-size-15 ml-1 align-middle"></i>
        </DropdownToggle>
        <DropdownMenu>
            {columns
                .map((column) => ({
                    ...column,
                    toggle: toggles[column.dataField],
                }))
                .map((column) => (
                    <DropdownItem key={column.dataField} onClick={() => onColumnToggle(column.dataField)}>
                        {column.toggle && <i className="uil uil-check"></i>}
                        <span className="ml-2">{column.text}</span>
                    </DropdownItem>
                ))}
        </DropdownMenu>
    </UncontrolledDropdown>
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

const columns = [
    {
        dataField: 'reservation_id',
        text: '#',
        sort: true,
    },
    {
        dataField: 'first_name',
        text: 'First name',
        sort: true,
        // formatter: (cell, row, rowIndex) => (
        //     <FetchCustomerInfo key={`first_name-${row.customer_id}`} customerId={row.customer_id} type="first_name"/>
        // ),
    },
    {
        dataField: 'last_name',
        text: 'last_name',
        sort: true,
        // formatter: (value) => {
        //     return <FetchCustomerInfo key={`adress-${value}`} customerId={value} />;
        // },
    },
    {
        dataField: 'passport_number',
        text: 'Paspoort ID',
        sort: true,
    },
    {
        dataField: 'reservation_datetime',
        text: 'Reservation time',
        sort: true,
    },
    {
        dataField: 'test_type',
        text: 'Test type',
        sort: true,
    },
    {
        dataField: 'actions',
        text: 'Actions',
        sort: false,
    },
];

const defaultSorted = [
    {
        dataField: 'reservation_id',
        order: 'asc',
    },
];

const Table = () => {
    const reservations = useRequest('http://161.97.164.207/reservations?offset=0&tested=false');
    if (!reservations) {
        return null;
    }
    const { SearchBar } = Search;

    addCustomProps(reservations);

    function addCustomProps(data) {
        // loop through list to add button
        for (const person in data) {
            if (Object.hasOwnProperty.call(data, person)) {
                const record = data[person];

                // add custom item to array
                record.first_name = <FetchCustomerInfo customerId={record.customer_id} type="first_name" />;
                record.last_name = <FetchCustomerInfo customerId={record.customer_id} type="last_name" />;
                record.passport_number = <FetchCustomerInfo customerId={record.customer_id} type="passport_number" />;
                record.actions = (
                    <Link to={`/test-result/` + record.customer_id}>
                        <Button color="primary" size="md">
                            View
                        </Button>
                    </Link>
                );
                //console.log(record);
            }
        }
    }

    return (
        <Card>
            <CardBody>
                <p className="sub-header">Expand row to see more additional details</p>
                <ToolkitProvider
                    bootstrap4
                    keyField="reservation_id"
                    data={reservations}
                    columns={columns}
                    search={{
                        searchFormatted: true,
                    }}
                    columnToggle>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col>{/* <CustomToggleList {...props.columnToggleProps} /> */}</Col>
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
                                        { text: 'All', value: reservations.length },
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

const AllReservations = () => {
    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[{ label: 'Reservations', path: '/pages/starter', active: true }]}
                        title={'All Reservations'}
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

export default AllReservations;
