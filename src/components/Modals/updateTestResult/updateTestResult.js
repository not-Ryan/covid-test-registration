import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';

const updateTestResultModal = ({ modalState, toggle, reservationdId }) => {

    const submitData = (props) => {
        console.log(props);
    };

    return (
        <Modal isOpen={modalState} toggle={toggle} centered>
            <ModalHeader toggle={toggle}>Update Test Result</ModalHeader>
            <ModalBody>
                <p className="mb-1 font-weight-bold">Test Result</p>
                <Select
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 0, label: 'Negative' },
                        { value: 1, label: 'Positive' },
                    ]}
                    //defaultValue={false}
                ></Select>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" className="ml-1" onClick={toggle}>
                    Cancel
                </Button>
                <Button color="success" className="ml-1" onClick={submitData}>
                    Submit
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default updateTestResultModal;
