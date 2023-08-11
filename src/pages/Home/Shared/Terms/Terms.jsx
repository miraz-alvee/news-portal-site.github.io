import React from 'react';
import {Link} from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus soluta tempora dolorum eaque illo vitae modi consectetur! Fugiat quod earum nesciunt adipisci quisquam doloribus laudantium fugit reiciendis nulla officia!
            </p>
            <p>Go Back to<Link to="/register">Regisater</Link></p>
        </div>
    );
};

export default Terms;