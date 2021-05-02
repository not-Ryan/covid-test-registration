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
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageTitle from '../../../components/PageTitle';

const records = [
    {
        id: 1,
        age: 32,
        name: 'Burt',
        company: 'Kaggle',
        phone: '+1 (823) 532-2427',
    },
    {
        id: 2,
        age: 23,
        name: 'Long',
        company: 'Magmina',
        phone: '+1 (813) 583-2089',
    },
    {
        id: 3,
        age: 31,
        name: 'Alvarado',
        company: 'Translink',
        phone: '+1 (975) 468-3875',
    },
    {
        id: 4,
        age: 24,
        name: 'Lilia',
        company: 'Digitalus',
        phone: '+1 (891) 537-3461',
    },
    {
        id: 5,
        age: 25,
        name: 'Amanda',
        company: 'Bunga',
        phone: '+1 (916) 522-3747',
    },
    {
        id: 6,
        age: 20,
        name: 'Alexandra',
        company: 'Conjurica',
        phone: '+1 (876) 492-3181',
    },
    {
        id: 7,
        age: 27,
        name: 'Diana',
        company: 'Extragen',
        phone: '+1 (977) 417-3038',
    },
    {
        id: 8,
        age: 26,
        name: 'Goodman',
        company: 'Aquamate',
        phone: '+1 (930) 545-2289',
    },
    {
        id: 9,
        age: 26,
        name: 'Edith',
        company: 'Pyrami',
        phone: '+1 (854) 506-3468',
    },
    {
        id: 10,
        age: 29,
        name: 'Juana',
        company: 'Singavera',
        phone: '+1 (872) 560-2324',
    },
    {
        id: 11,
        age: 21,
        name: 'Fitzgerald',
        company: 'Dancerity',
        phone: '+1 (813) 573-2507',
    },
    {
        id: 12,
        age: 38,
        name: 'Madden',
        company: 'Corpulse',
        phone: '+1 (935) 534-3876',
    },
    {
        id: 13,
        age: 40,
        name: 'Jewell',
        company: 'Frenex',
        phone: '+1 (886) 516-3262',
    },
    {
        id: 14,
        age: 32,
        name: 'Kerr',
        company: 'Artiq',
        phone: '+1 (807) 561-3077',
    },
    {
        id: 15,
        age: 20,
        name: 'Washington',
        company: 'Organica',
        phone: '+1 (948) 458-3517',
    },
    {
        id: 16,
        age: 20,
        name: 'Audrey',
        company: 'Softmicro',
        phone: '+1 (900) 592-3841',
    },
    {
        id: 17,
        age: 39,
        name: 'Allison',
        company: 'Playce',
        phone: '+1 (998) 478-3810',
    },
    {
        id: 18,
        age: 25,
        name: 'Holder',
        company: 'Paragonia',
        phone: '+1 (850) 536-2708',
    },
    {
        id: 19,
        age: 26,
        name: 'Atkinson',
        company: 'Scentric',
        phone: '+1 (850) 467-2761',
    },
    {
        id: 20,
        age: 35,
        name: 'Delaney',
        company: 'Telpod',
        phone: '+1 (934) 468-2218',
    },
    {
        id: 21,
        age: 20,
        name: 'Myrna',
        company: 'Zanity',
        phone: '+1 (953) 565-3836',
    },
    {
        id: 22,
        age: 30,
        name: 'Erna',
        company: 'Techade',
        phone: '+1 (872) 574-3879',
    },
    {
        id: 23,
        age: 36,
        name: 'Fannie',
        company: 'Cubix',
        phone: '+1 (843) 576-2904',
    },
    {
        id: 24,
        age: 38,
        name: 'Melody',
        company: 'Talae',
        phone: '+1 (817) 424-3500',
    },
    {
        id: 25,
        age: 27,
        name: 'Letitia',
        company: 'Enjola',
        phone: '+1 (857) 441-2917',
    },
    {
        id: 26,
        age: 33,
        name: 'Nina',
        company: 'Eventex',
        phone: '+1 (917) 599-2793',
    },
    {
        id: 27,
        age: 40,
        name: 'Byrd',
        company: 'Obones',
        phone: '+1 (846) 422-2064',
    },
    {
        id: 28,
        age: 34,
        name: 'Chen',
        company: 'Dadabase',
        phone: '+1 (956) 474-3409',
    },
    {
        id: 29,
        age: 25,
        name: 'Alexandria',
        company: 'Turnabout',
        phone: '+1 (964) 415-2278',
    },
    {
        id: 30,
        age: 37,
        name: 'Page',
        company: 'Metroz',
        phone: '+1 (897) 541-2460',
    },
    {
        id: 31,
        age: 24,
        name: 'Clare',
        company: 'Zilch',
        phone: '+1 (832) 591-3814',
    },
    {
        id: 32,
        age: 38,
        name: 'Lindsey',
        company: 'Roughies',
        phone: '+1 (942) 579-2920',
    },
    {
        id: 33,
        age: 32,
        name: 'Oconnor',
        company: 'Kinetica',
        phone: '+1 (899) 599-3206',
    },
    {
        id: 34,
        age: 35,
        name: 'Maldonado',
        company: 'Zentime',
        phone: '+1 (955) 419-2815',
    },
    {
        id: 35,
        age: 25,
        name: 'Day',
        company: 'Eargo',
        phone: '+1 (895) 555-2916',
    },
    {
        id: 36,
        age: 20,
        name: 'Collier',
        company: 'Phuel',
        phone: '+1 (998) 468-2079',
    },
    {
        id: 37,
        age: 40,
        name: 'Jeannette',
        company: 'Entogrok',
        phone: '+1 (904) 567-2078',
    },
    {
        id: 38,
        age: 33,
        name: 'Wallace',
        company: 'Nurali',
        phone: '+1 (877) 566-3957',
    },
    {
        id: 39,
        age: 39,
        name: 'Mcfadden',
        company: 'Cincyr',
        phone: '+1 (949) 405-3992',
    },
    {
        id: 40,
        age: 21,
        name: 'Chrystal',
        company: 'Futurize',
        phone: '+1 (988) 458-3032',
    },
    {
        id: 41,
        age: 31,
        name: 'Leila',
        company: 'Zensure',
        phone: '+1 (902) 447-2419',
    },
    {
        id: 42,
        age: 24,
        name: 'Madelyn',
        company: 'Egypto',
        phone: '+1 (881) 538-3081',
    },
    {
        id: 43,
        age: 39,
        name: 'Peck',
        company: 'Tellifly',
        phone: '+1 (803) 452-3922',
    },
    {
        id: 44,
        age: 32,
        name: 'Garrett',
        company: 'Aquasure',
        phone: '+1 (876) 475-2185',
    },
    {
        id: 45,
        age: 21,
        name: 'Kramer',
        company: 'Terrago',
        phone: '+1 (912) 404-2597',
    },
    {
        id: 46,
        age: 35,
        name: 'Lane',
        company: 'Anivet',
        phone: '+1 (911) 495-3587',
    },
    {
        id: 47,
        age: 21,
        name: 'Merritt',
        company: 'Inear',
        phone: '+1 (856) 519-3838',
    },
    {
        id: 48,
        age: 25,
        name: 'Margarita',
        company: 'Unq',
        phone: '+1 (931) 558-3156',
    },
    {
        id: 49,
        age: 28,
        name: 'Leigh',
        company: 'Marqet',
        phone: '+1 (918) 526-2007',
    },
    {
        id: 50,
        age: 31,
        name: 'Coleman',
        company: 'Insuresys',
        phone: '+1 (827) 449-3786',
    },
    {
        id: 51,
        age: 31,
        name: 'Alexander',
        company: 'Portico',
        phone: '+1 (854) 576-2455',
    },
    {
        id: 52,
        age: 38,
        name: 'Tanisha',
        company: 'Earthwax',
        phone: '+1 (994) 494-3496',
    },
    {
        id: 53,
        age: 23,
        name: 'Crane',
        company: 'Pushcart',
        phone: '+1 (924) 497-3347',
    },
    {
        id: 54,
        age: 26,
        name: 'Carmella',
        company: 'Acusage',
        phone: '+1 (898) 575-2585',
    },
    {
        id: 55,
        age: 27,
        name: 'Rosalind',
        company: 'Isologica',
        phone: '+1 (838) 572-2994',
    },
    {
        id: 56,
        age: 37,
        name: 'Hugo',
        company: 'Gazak',
        phone: '+1 (991) 446-3820',
    },
    {
        id: 57,
        age: 27,
        name: 'Bernard',
        company: 'Zoinage',
        phone: '+1 (824) 585-2197',
    },
    {
        id: 58,
        age: 29,
        name: 'Tate',
        company: 'Endipine',
        phone: '+1 (896) 448-2084',
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
        dataField: 'company',
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
                <Col md={12}>
                    <TableWithRowExpand />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AllReservations;
