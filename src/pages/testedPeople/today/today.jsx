import React from 'react';
import { useRequest } from '../../../helpers/axios';
import { Row, Col, Card, CardBody, Input, Button, Badge, UncontrolledTooltip } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import PageTitle from '../../../components/PageTitle';

export default function TestedPeople() {
    const testedPeople = useRequest('http://161.97.164.207/reservations?offset=0&limit=20&tested=true');
    if (!testedPeople) {
        return null;
    }

    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;

    const defaultSorted = [
        {
            dataField: 'id',
            order: 'asc',
        },
    ];

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
            sort: true,
        },
        {
            dataField: 'full_name',
            text: 'Full Name',
            sort: true,
        },
        {
            dataField: 'dob',
            text: 'Date of birth',
            sort: false,
        },
        {
            dataField: 'address',
            text: 'Address',
            sort: true,
        },
        {
            dataField: 'location_tested',
            text: 'Location tested',
            sort: false,
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
                {/* preloader */}
                {this.props.loading && <Loader />}

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
                                    keyField="id"
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
                                                <Col className="text-right">
                                                    <ExportCSVButton {...props.csvProps} className="btn btn-primary">
                                                        Save
                                                    </ExportCSVButton>
                                                </Col>
                                            </Row>

                                            <BootstrapTable
                                                className="mb-0"
                                                hover
                                                {...props.baseProps}
                                                bordered={false}
                                                defaultSorted={defaultSorted}
                                                pagination={paginationFactory({
                                                    sizePerPage: 8,
                                                    sizePerPageRenderer: sizePerPageRenderer,
                                                    sizePerPageList: [
                                                        { text: '8', value: 8 },
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
