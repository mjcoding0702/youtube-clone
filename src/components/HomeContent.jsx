import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

export default function HomeContent() {
    return (
        <>
            <div style={{ marginLeft: '250px', backgroundColor: '#f1f1f1' }}>
                <div className="container">
                    <div className="player-wrapper">
                        <ReactPlayer
                            className='react-player'
                            url='https://firebasestorage.googleapis.com/v0/b/mentor-mentee-booking-system.appspot.com/o/meetings%2Fsample-5s.mp4?alt=media&token=4c92fd04-d469-479f-835c-2ef19b7f7228'
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
