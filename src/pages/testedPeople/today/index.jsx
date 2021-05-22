import React from 'react';
import moment from 'moment';
import { startOfDay, endOfDay } from 'date-fns';
import { useRequest } from '../../../helpers/axios';
import { Row, Col, Card, CardBody, Input, Button, Badge, UncontrolledTooltip } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import PageTitle from '../../../components/PageTitle';

function FetchCustomerInfo({ customerId, type }) {
    const customer = useRequest('http://161.97.164.207/customers/' + customerId);

    if (!customer) {
        return <span>Loading...</span>;
    } else if (type === 'full_name') {
        return customer.first_name + ' ' + customer.last_name;
    } else if (type === 'date_of_birth') {
        return customer.date_of_birth;
    } else if (type === 'passport_number') {
        return customer.passport_number;
    }
}

function FetchLocationName({ locationId }) {
    const location = useRequest('http://161.97.164.207/locations/' + locationId);

    if (!location) {
        return <span>Loading...</span>;
    } else {
        return location.location_name;
    }
}

export default function TestedPeople() {
    //get current date
    const myCurrentDate = new Date();

    const startDate = startOfDay(myCurrentDate);
    const newStartDate = moment(startDate).format('YYYY-MM-DD HH:mm:ss');

    const endDate = endOfDay(myCurrentDate);
    const newEndDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss');

    const testedPeople = useRequest('http://161.97.164.207/reservations?offset=0&tested=true&start=' + newStartDate + '&end=' + newEndDate);
    if (!testedPeople) {
        return null;
    }

    const { SearchBar } = Search;

    addCustomProps(testedPeople);

    function addCustomProps(testedPeople) {
        // loop through list to add button
        for (const person in testedPeople) {
            if (Object.hasOwnProperty.call(testedPeople, person)) {
                const record = testedPeople[person];
                let paidIcon = 'uil uil-money-withdrawal ml-2';

                // add custom item to array
                record.actions = (
                    <Link to={`/test-result/` + record.customer_id}>
                        <Button color="primary" size="md">
                            View
                        </Button>
                    </Link>
                );

                if (record.payment_method === 'pin') {
                    paidIcon = 'uil uil-atm-card ml-2';
                }

                if (record.payment_method === 'factuur') {
                    paidIcon = 'uil uil-invoice ml-2';
                }

                record.full_name = <FetchCustomerInfo customerId={record.customer_id} type="full_name" />;
                record.date_of_birth = <FetchCustomerInfo customerId={record.customer_id} type="date_of_birth" />;
                record.passport_number = <FetchCustomerInfo customerId={record.customer_id} type="passport_number" />;
                record.location_name = <FetchLocationName locationId={record.location_id} />;

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
                // if (record.test_result === true) {
                //     testResult = 'Positive';
                //     resultTag = 'soft-success';
                // }

                // record.result_tag = (
                //     <Badge color={resultTag} className="mr-1">
                //         {testResult}
                //     </Badge>
                // );
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
            dataField: 'full_name',
            text: 'Full Name',
            sort: true,
        },
        {
            dataField: 'date_of_birth',
            text: 'Date of birth',
            sort: false,
        },
        {
            dataField: 'passport_number',
            text: 'Paspoort',
            sort: true,
        },
        {
            dataField: 'location_name',
            text: 'Location tested',
            sort: false,
        },
        {
            dataField: 'test_tube_id',
            text: 'Test tube',
            sort: false,
        },
        {
            dataField: 'paid_price_tag',
            text: 'Paid',
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
                            title={'Tested People Today'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card>
                            <CardBody>
                                <p className="sub-header">A Table showing all tested people today.</p>

                                <ToolkitProvider
                                    bootstrap4
                                    keyField="reservation_id"
                                    data={testedPeople}
                                    columns={columns}
                                    search={{
                                        searchFormatted: true,
                                    }}
                                    exportCSV={{ onlyExportFiltered: true, exportAll: false }}>
                                    {(props) => (
                                        <React.Fragment>
                                            <Row>
                                                <Col>
                                                    <SearchBar {...props.searchProps} />
                                                </Col>
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
