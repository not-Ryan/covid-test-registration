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
    },
    {
        dataField: 'last_name',
        text: 'last_name',
        sort: true,
    },
    {
        dataField: 'paspoort_id',
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
];

const defaultSorted = [
    {
        dataField: 'reservation_id',
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

const TableWithRowExpand = (data) => {

    const reservations = useRequest('http://161.97.164.207/reservations?offset=0&limit=20&tested=false');
    if (!reservations) {
        return null;
    }
    const { SearchBar } = Search;

    console.log(reservations);
    
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
                <ToolkitProvider bootstrap4 keyField="id" data={reservations} columns={columns} search columnToggle>
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
                                //striped
                                hover
                                defaultSorted={defaultSorted}
                                pagination={paginationFactory({
                                    sizePerPage: 15,
                                    sizePerPageRenderer: sizePerPageRenderer,
                                    sizePerPageList: [
                                        { text: '15', value: 15 },
                                        { text: '50', value: 50 },
                                        { text: '100', value: 100 },
                                        { text: 'All', value: reservations.length },
                                    ],
                                })}
                                //expandRow={expandRow}
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
                    <TableWithRowExpand />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AllReservations;
