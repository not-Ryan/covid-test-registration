import React, { useState } from 'react';
import { useRequest } from '../../../helpers/axios';
import { Row, Col, Card, CardBody, Input, Button, Badge, UncontrolledTooltip } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import PageTitle from '../../../components/PageTitle';

function FetchCustomerAdress({ customerId }) {
    const customer = useRequest('http://161.97.164.207/customers/' + customerId);

    if (!customer) {
        return <span>Loading...</span>;
    } else {
        return <span>{customer.address}</span>;
    }
}

function FetchCustomerFullName({ customerId }) {
    const customer = useRequest('http://161.97.164.207/customers/' + customerId);

    if (!customer) {
        return <span>Loading...</span>;
    } else {
        return (
            <span>
                {customer.first_name} {customer.last_name}
            </span>
        );
    }
}

function FetchCustomerDateOfBirth({ customerId }) {
    const customer = useRequest('http://161.97.164.207/customers/' + customerId);

    if (!customer) {
        return <span>Loading...</span>;
    } else {
        return <span>{customer.date_of_birth}</span>;
    }
}

function FetchLocationName({ locationId }) {
    const location = useRequest('http://161.97.164.207/locations/' + locationId + '?date=2021-05-19');

    if (!location) {
        return <span>Loading...</span>;
    } else {
        return <span>{location.location_name}</span>;
    }
}

function FetchCustomerName({ customerId }) {
    console.log(customerId);
    //const customer = useRequest('http://161.97.164.207/customers/' + customerId);
    // if (!customer) {
    //     return <span>Loading...</span>;
    // } else {
    //     return (
    //         <span>
    //             {customer.first_name} {customer.last_name}
    //         </span>
    //     );
    // }
}

export default function TestedPeople() {
    const { SearchBar } = Search;

    const testedPeople = useRequest('http://161.97.164.207/reservations?offset=0&limit=20&tested=true');
    if (!testedPeople) {
        return null;
    }

    addCustomProps(testedPeople);

    function addCustomProps(testedPeople) {
        // loop through list to add button
        for (const person in testedPeople) {
            if (Object.hasOwnProperty.call(testedPeople, person)) {
                const record = testedPeople[person];
                let testResult = 'Negative';
                let resultTag = 'soft-danger';
                let paidIcon = 'uil uil-money-withdrawal ml-2';
                let paidIconTooltipTitle = 'cash';
                //FetchCustomerName(record.customer_id);

                // add custom item to array
                record.actions = (
                    <Link to={`/test-result?id=` + record.customer_id}>
                        <Button color="primary" size="md">
                            View
                        </Button>
                    </Link>
                );

                if (record.payment_method === 'pin') {
                    paidIcon = 'uil uil-atm-card ml-2';
                    paidIconTooltipTitle = 'pin';
                }

                record.paid_price_tag = (
                    <p>
                        {record.amount_paid}
                        <i className={paidIcon} id={'tooltip-' + record.reservation_id}></i>
                        <UncontrolledTooltip
                            placement="top"
                            id="tooltip-price-tooltip"
                            target={'tooltip-' + record.reservation_id}>
                            {record.payment_method}
                        </UncontrolledTooltip>
                    </p>
                );

                // // check person result state to add tag styling
                if (record.test_result === true) {
                    testResult = 'Positive';
                    resultTag = 'soft-success';
                }

                record.result_tag = (
                    <Badge color={resultTag} className="mr-1">
                        {testResult}
                    </Badge>
                );
            }
        }
    }

    const defaultSorted = [
        {
            dataField: 'reservation_id',
            order: 'asc',
        },
    ];

    const columns = [
        {
            dataField: 'reservation_id',
            text: 'ID',
            sort: true,
        },
        {
            dataField: 'customer_id',
            text: 'Full name',
            sort: true,
            formatter: (value) => {
                return <FetchCustomerFullName key={`full_name-${value}`} customerId={value} />;
            },
        },
        {
            dataField: 'customer_id',
            text: 'Date of birth',
            sort: false,
            formatter: (value) => {
                return <FetchCustomerDateOfBirth key={`date_of_birth-${value}`} customerId={value} />;
            },
        },
        {
            dataField: 'customer_id',
            text: 'Address',
            sort: true,
            formatter: (value) => {
                return <FetchCustomerAdress key={`adress-${value}`} customerId={value} />;
            },
        },
        {
            dataField: 'location_id',
            text: 'Location tested',
            sort: false,
            formatter: (value) => {
                return <FetchLocationName key={`location-${value}`} locationId={value} />;
            },
        },
        {
            dataField: 'paid_price_tag',
            text: 'Paid price',
            sort: false,
        },
        {
            dataField: 'result_tag',
            text: 'Test result',
            sort: false,
        },
        {
            dataField: 'actions',
            text: 'Actions',
            sort: false,
        },
    ];

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

    return (
        <React.Fragment>
            <div className="">
                <Row className="page-title">
                    <Col md={12}>
                        <PageTitle
                            breadCrumbItems={[{ label: 'Tested People', path: '/pages/starter', active: true }]}
                            title={'All Tested People'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card>
                            <CardBody>
                                <p className="sub-header">A Table showing all tested people</p>

                                <ToolkitProvider
                                    bootstrap4
                                    keyField="full_name"
                                    data={testedPeople}
                                    columns={columns}
                                    search
                                    exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
                                    {(props) => (
                                        <React.Fragment>
                                            <Row>
                                                <Col>
                                                    <SearchBar {...props.searchProps} />
                                                </Col>
                                                <Col className="text-right"></Col>
                                            </Row>

                                            <BootstrapTable
                                                className="mb-0"
                                                hover
                                                {...props.baseProps}
                                                bordered={false}
                                                defaultSorted={defaultSorted}
                                                pagination={paginationFactory({
                                                    sizePerPage: 10,
                                                    sizePerPageRenderer: sizePerPageRenderer,
                                                    sizePerPageList: [
                                                        { text: '10', value: 10 },
                                                        { text: '50', value: 50 },
                                                        { text: '100', value: 100 },
                                                        { text: 'All', value: testedPeople.length },
                                                    ],
                                                })}
                                                wrapperClasses="table-responsive"
                                            />
                                        </React.Fragment>
                                    )}
                                </ToolkitProvider>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}
