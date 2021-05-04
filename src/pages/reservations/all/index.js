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
import BootstrapTable from 'react-bootstrap-table-next';
import { Link, Route } from 'react-router-dom';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import SingleReservation from '../today';
import PageTitle from '../../../components/PageTitle';

const records = [
    {
        id: 1,
        age: 32,
        name: 'Burt',
        company: (
            <Badge color="soft-secondary" className="mr-1">
                Pending
            </Badge>
        ),
        phone: '+5456345623525',
    },
    {
        id: 2,
        age: 23,
        name: 'Long',
        company: (
            <Badge color="soft-secondary" className="mr-1">
                Pending
            </Badge>
        ),
        phone: '+1 (813) 583-2089',
    },
    {
        id: 3,
        age: 31,
        name: 'Alvarado',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (975) 468-3875',
    },
    {
        id: 4,
        age: 24,
        name: 'Lilia',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (891) 537-3461',
    },
    {
        id: 5,
        age: 25,
        name: 'Amanda',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (916) 522-3747',
    },
    {
        id: 6,
        age: 20,
        name: 'Alexandra',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (876) 492-3181',
    },
    {
        id: 7,
        age: 27,
        name: 'Diana',
        company: (
            <Badge color="success" className="mr-1">
                Positive
            </Badge>
        ),
        phone: '+1 (977) 417-3038',
    },
    {
        id: 8,
        age: 26,
        name: 'Goodman',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (930) 545-2289',
    },
    {
        id: 9,
        age: 26,
        name: 'Edith',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (854) 506-3468',
    },
    {
        id: 10,
        age: 29,
        name: 'Juana',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (872) 560-2324',
    },
    {
        id: 11,
        age: 21,
        name: 'Fitzgerald',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (813) 573-2507',
    },
    {
        id: 12,
        age: 38,
        name: 'Madden',
        company: (
            <Badge color="soft-secondary" className="mr-1">
                Pending
            </Badge>
        ),
        phone: '+1 (935) 534-3876',
    },
    {
        id: 13,
        age: 40,
        name: 'Jewell',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (886) 516-3262',
    },
    {
        id: 14,
        age: 32,
        name: 'Kerr',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (807) 561-3077',
    },
    {
        id: 15,
        age: 20,
        name: 'Washington',
        company: (
            <Badge color="soft-danger" className="mr-1">
                Negative
            </Badge>
        ),
        phone: '+1 (948) 458-3517',
    },
    {
        id: 19,
        age: 26,
        name: 'Atkinson',
        company: 'Scentric',
        phone: '+1 (850) 467-2761',
    },
    {
        id: 59,
        age: 39,
        name: 'John',
        company: 'Progenex',
        phone: '+1 (805) 545-2585',
    },
    {
        id: 60,
        age: 20,
        name: 'Manning',
        company: 'Handshake',
        phone: '+1 (917) 405-3406',
    },
];

const columns = [
    {
        dataField: 'id',
        text: '#',
        sort: true,
    },
    {
        dataField: 'name',
        text: 'ID number',
        sort: false,
    },
    {
        dataField: 'name',
        text: 'First name',
        sort: true,
    },
    {
        dataField: 'phone',
        text: 'Last name',
        sort: true,
    },
    {
        dataField: 'age',
        text: 'Birth day',
        sort: true,
    },
    {
        dataField: 'company',
        text: 'Covid state',
        sort: false,
    },
];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
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

const TableWithRowExpand = () => {
    const { SearchBar } = Search;
    const expandRow = {
        renderer: (row) => (
            <div>
                <p className="mt-2">{`Hello ${row.name}`}</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
        ),
        showExpandColumn: true,
        onlyOneExpanding: true,
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
            return isAnyExpands ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>;
        },
        expandColumnRenderer: ({ expanded }) => {
            return expanded ? <i className="uil uil-minus"></i> : <i className="uil uil-plus"></i>;
        },
    };

    return (
        <Card>
            <CardBody>
                <p className="sub-header">Expand row to see more additional details</p>
                <ToolkitProvider bootstrap4 keyField="id" data={records} columns={columns} search columnToggle>
                    {(props) => (
                        <React.Fragment>
                            <Row>
                                <Col>
                                    <CustomToggleList {...props.columnToggleProps} />
                                </Col>
                                <Col className="text-right">
                                    <SearchBar {...props.searchProps} />
                                </Col>
                            </Row>

                            <BootstrapTable
                                {...props.baseProps}
                                bordered={false}
                                striped
                                defaultSorted={defaultSorted}
                                pagination={paginationFactory({
                                    sizePerPage: 15,
                                    sizePerPageRenderer: sizePerPageRenderer,
                                    sizePerPageList: [
                                        { text: '15', value: 15 },
                                        { text: '50', value: 50 },
                                        { text: '100', value: 100 },
                                        { text: 'All', value: records.length },
                                    ],
                                })}
                                expandRow={expandRow}
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
                <Link
                    className="btn-default"
                    to={{ pathname: '/reservation/view/2'}}>
                    View
                </Link>
                <Col md={12}>
                    <TableWithRowExpand />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AllReservations;
