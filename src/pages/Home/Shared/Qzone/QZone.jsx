import React from 'react';
import picture1 from '../../../../assets/qZone1.png'
import picture2 from '../../../../assets/qZone2.png'
import picture3 from '../../../../assets/qZone3.png'
import bg from '../../../../assets/bg.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center py-4 mt-5'>
            <h4>Q-zone</h4>
            <div>
                <img src={picture1} alt="" />
                <img src={picture2} alt="" />
                <img src={picture3} alt="" />
            </div>
        </div>
    );
};

export default QZone;