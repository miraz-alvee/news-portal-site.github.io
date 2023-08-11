import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import QZone from '../Qzone/QZone';
import bg from '../../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='text-center mt-2'>Login With</h4>
            <div className="d-grid gap-2 mt-2">
                <Button variant="outline-primary">Login With Google</Button>
                <Button variant="outline-secondary">Login With Facebook</Button>
            </div>
            <div className='mt-5'>
                <h4>Find on us</h4>
                <ListGroup className='mt-2'>
                    <ListGroup.Item>facebook</ListGroup.Item>
                    <ListGroup.Item>twitter</ListGroup.Item>
                    <ListGroup.Item>threads</ListGroup.Item>
                    <ListGroup.Item>instragram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <div className="image-container position-relative">
                    {/* Your image */}
                    <img src={bg} alt="" className="img-fluid" />

                    {/* Text and button overlay */}
                    <div className="overlay position-absolute top-10 start-50 translate-middle text-center text-white">
                        <h2>Your Text Here</h2>
                        <p>Any additional information you want to display Any additional information you want to display.Any additional information you want to display..</p>
                        <a href="#" className="btn btn-primary">
                            Your Button
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightNav;