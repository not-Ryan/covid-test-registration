import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Input, Button, Badge, UncontrolledTooltip } from 'reactstrap';
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
        this.fetchTestedPeople();
    }

    fetchTestedPeople = () => {
        Promise.all([fetch(`https://run.mocky.io/v3/e44948a1-a757-4808-9bb6-b72bc24f790c`)])
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
                const testedPeople = data[0];

                this.addViewMoreButton(testedPeople);

                //console.log(testedPeople);
            })
            .catch(function (error) {
                // if there's an error, log it
                console.log(error);
            });
    };

    addViewMoreButton = (testedPeople) => {
        let newList = [];

        // loop through list to add button
        for (const person in testedPeople) {
            if (Object.hasOwnProperty.call(testedPeople, person)) {
                const record = testedPeople[person];
                let testResult = 'Negative';
                let resultTag = 'soft-danger';

                // add custom item to array
                record.actions = (
                    <Link to={`/view-location?id=` + record.id}>
                        <Button color="primary" size="md">
                            View
                        </Button>
                    </Link>
                );

                record.paid_price_tag = (
                    <p id="tooltip-price">
                      {record.paid_price}
                        <UncontrolledTooltip placement="top" id="tooltip-price-tooltip" target="tooltip-price">
                            pin
                        </UncontrolledTooltip>
                    </p>
                );

                // check person result state to add tag styling
                if (record.test_result == 'true') {
                    testResult = 'Positive';
                    resultTag = 'soft-success';
                }

                record.result_tag = (
                    <Badge color={resultTag} className="mr-1">
                        {testResult}
                    </Badge>
                );

                newList.push(record);
            }
        }

        this.setState({ allTestedPeople: testedPeople });
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
