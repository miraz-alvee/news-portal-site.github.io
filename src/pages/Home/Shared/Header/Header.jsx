import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p className='text-'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex bg-'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.....I can be a React component, multiple React component.....
                </Marquee>
            </div>
            
        </Container>

    );
};

export default Header;