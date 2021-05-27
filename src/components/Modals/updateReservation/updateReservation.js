import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const updateReservationModal = ({ modalState, toggle }) => {
    return (
        <Modal isOpen={modalState} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <h6>Text in a modal</h6>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <hr />
                <h6>Overflowing text to show scroll behavior</h6>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" className="ml-1" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default updateReservationModal;
