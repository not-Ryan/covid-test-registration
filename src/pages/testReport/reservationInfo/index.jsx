import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { useRequest } from '../../../helpers/axios';
import Moment from 'react-moment';
import UpdateReservationModal from '../../../components/Modals/updateReservation/updateReservation';
import { Calendar } from 'react-feather';
const iconStyles = {
    fontSize: '20px',
};

const ReservationInfo = ({ props }) => {
    const [modalState, setModalState] = useState(false);

    let paidAmount = 'Not paid yet.';
    let paidMethod = '-';
    const location = useRequest('http://161.97.164.207:8080/locations/' + props.location_id);
    if (!location) {
        return null;
    }

    if (props.amount_paid) {
        paidAmount = 'Euro ' + props.amount_paid;
        paidMethod = props.payment_method;
    }

    const toggleModal = () => {
        setModalState((state) => !state);
    };

    return (
        <React.Fragment>
            <UpdateReservationModal
                modalState={modalState}
                toggle={toggleModal}
                reservationdId={props.reservation_id}
            />
            <div className="pb-3">
                <label className="font-weight-bold d-inline header-title" style={{ verticalAlign: 'center' }}>
                    <Calendar
                        className="icon-dual icon-md mr-2"
                        style={{ verticalAlign: 'center' }}
                        data-feather="hard-drive"></Calendar>
                    Reservation
                </label>
                <div style={{ float: 'right' }}>
                    <Button className="width-xs" color="primary" onClick={toggleModal}>
                        Update
                    </Button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-calender text-primary" style={iconStyles}></i> Reservation date
                        </p>
                        <h5 className="font-size-14">
                            <Moment format="DD/MM/YYYY HH:mm">{props.date_of_birth}</Moment>
                        </h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-location-point text-primary" style={iconStyles}></i> Location
                        </p>
                        <h5 className="font-size-14 text-capitalize">{location.location_name}</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-euro-circle text-primary" style={iconStyles}></i> Paid amount
                        </p>
                        <h5 className="font-size-14">{paidAmount}</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="mt-4">
                        <p className="mb-2">
                            <i className="uil-receipt-alt text-primary mr-1" style={iconStyles}></i>
                            Paid method
                        </p>
                        <h5 className="font-size-14 text-capitalize">
                            {paidMethod}
                            {/* <Badge color="soft-success" className="mr-1">
                                {paidMethod}
                            </Badge> */}
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ReservationInfo;
