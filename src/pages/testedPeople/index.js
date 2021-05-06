import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle';

class AllTestedPeople extends Component {
    state = {
        allTestedPeople: [],
    };

    componentDidMount() {
        this.fetchLocations();
    }

    fetchLocations = () => {
        Promise.all([fetch(`https://run.mocky.io/v3/6e21e10e-05fa-4f46-8b88-885b66611d8c`)])
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
                this.setState({ allTestedPeople: locationRaw });
            })
            .catch(function (error) {
                // if there's an error, log it
                console.log(error);
            });
    };

    render() {
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
                dataField: 'name',
                text: 'Name',
                sort: true,
            },
            {
                dataField: 'phone',
                text: 'Phone Number',
                sort: false,
            },
            {
                dataField: 'address',
                text: 'Age',
                sort: true,
            },
            {
                dataField: 'closing',
                text: 'Company',
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
                                title={'All Tested People'}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="header-title mt-0 mb-1">Search and Save</h4>
                                    <p className="sub-header">
                                        A Table allowing search and export the data in CSV format
                                    </p>

                                    <ToolkitProvider
                                        bootstrap4
                                        keyField="id"
                                        data={this.state.allTestedPeople}
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
                                                        <ExportCSVButton
                                                            {...props.csvProps}
                                                            className="btn btn-primary">
                                                            Save
                                                        </ExportCSVButton>
                                                    </Col>
                                                </Row>

                                                <BootstrapTable
                                                    {...props.baseProps}
                                                    bordered={false}
                                                    defaultSorted={defaultSorted}
                                                    pagination={paginationFactory({
                                                        sizePerPage: 5,
                                                        sizePerPageRenderer: sizePerPageRenderer,
                                                        sizePerPageList: [
                                                            { text: '5', value: 5 },
                                                            { text: '10', value: 10 },
                                                            { text: '25', value: 25 },
                                                            { text: 'All', value: this.state.allTestedPeople.length },
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
}

export default AllTestedPeople;
