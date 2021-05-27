import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Progress,
    FormGroup,
    CustomInput,
    Row,
    Col,
} from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { Wizard, Steps, Step } from 'react-albus';

const updateReservationModal = ({ modalState, toggle, reservationdId }) => {
    console.log(reservationdId);
    return (
        <Modal isOpen={modalState} toggle={toggle} centered>
            <ModalHeader toggle={toggle}>Reservation update</ModalHeader>
            <ModalBody>
                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment className="p-4">
                            <Progress
                                animated
                                striped
                                color="success"
                                value={((steps.indexOf(step) + 1) / steps.length) * 100}
                                className="mb-3 progress-sm"
                            />
                            <Steps>
                                <Step
                                    id="AddTestTube"
                                    render={({ next }) => (
                                        <AvForm
                                            onValidSubmit={(event, values) => {
                                                next();
                                            }}>
                                            <AvField name="username" label="Test tube id" type="text" required />
                                            <ul className="list-inline wizard mb-0">
                                                <li className="next list-inline-item float-right">
                                                    <Button color="success" type="submit">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </AvForm>
                                    )}
                                />
                                <Step
                                    id="AddPayment"
                                    render={({ next, previous }) => (
                                        <AvForm
                                            onValidSubmit={(event, values) => {
                                                next();
                                            }}>
                                            <AvField
                                                type="select"
                                                name="select-payment-method"
                                                label="Payement Method"
                                                //helpMessage="Idk, this is an example. Deal with it!"
                                            >
                                                <option value="cash">Cash</option>
                                                <option value="pin">Pin</option>
                                                <option value="invoice">Invoice</option>
                                            </AvField>
                                            <AvField name="padi_amount" label="Paid amount" type="number" required />

                                            <ul className="list-inline wizard mb-0">
                                                <li className="previous list-inline-item">
                                                    <Button onClick={previous} color="light">
                                                        Previous
                                                    </Button>
                                                </li>
                                                <li className="next list-inline-item float-right">
                                                    <Button color="success" type="submit">
                                                        Next
                                                    </Button>
                                                </li>
                                            </ul>
                                        </AvForm>
                                    )}
                                />
                                <Step
                                    id="reservation_succes"
                                    render={({ previous }) => (
                                        <Row>
                                            <Col sm={12}>
                                                <div className="text-center">
                                                    <h2 className="mt-0">
                                                        <i className="mdi mdi-check-all"></i>
                                                    </h2>
                                                    <h3 className="mt-0">Bevestig informatie</h3>

                                                    <p className="w-75 mb-2 mx-auto">
                                                        <strong>Test tube id :</strong> 32352352
                                                    </p>
                                                    <p className="w-75 mb-2 mx-auto">
                                                        <strong>Paid method :</strong> Pin
                                                    </p>
                                                    <p className="w-75 mb-2 mx-auto">
                                                        <strong>Paid amount:</strong> Euro 99,99
                                                    </p>
                                                </div>
                                            </Col>

                                            <Col sm={12}>
                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} color="light">
                                                            Previous
                                                        </Button>
                                                    </li>

                                                    <li className="next list-inline-item float-right">
                                                        <Button color="success">Submit</Button>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    )}
                                />
                            </Steps>
                        </React.Fragment>
                    )}
                />
            </ModalBody>
            {/* <ModalFooter>
                <Button color="secondary" className="ml-1" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter> */}
        </Modal>
    );
};

export default updateReservationModal;
