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
        <Modal isOpen={modalState} toggle={toggle}>
            <ModalHeader toggle={toggle}>Reservation</ModalHeader>
            <ModalBody>
                <Wizard
                    render={({ step, steps }) => (
                        <React.Fragment>
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
                                            {/* <AvField name="password" label="Password" type="password" required /> */}
                                            
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
                                            <AvField name="payment_method" label="Payment method" type="text" required />
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
