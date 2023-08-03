import { useState } from 'react';
import VideoComments from './VideoComments';

export default function VideoDetails() {
    const [isCommenting, setIsCommenting] = useState(false);

    const handleClick = () => {
        setIsCommenting(!isCommenting);
    };

    return (
        <>
            <div className="col-12 col-lg-8 col-xxl-9 px-0">
                <div className="embed-responsive embed-responsive-16by9" >
                    <video className="embed-responsive-item" controls style={{width: '100%'}}>
                        <source src="src\assets\sample-5s.mp4" type="video/mp4"/>
                        {/* Fallback for browsers that don't support the <video> element */}
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-title">
                    <p className="fw-bold fs-5 text-black">踩雷RM2.50的Palia马戏团! 情侣约会竟遭意外!! 😱｜低清 Dissy｜搞笑日常｜</p>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <div className="d-flex">
                            <img src='src\assets\Rex Logo (3).PNG' width="40" alt='test' className='rounded-circle'/>
                            <div className="ms-3">
                            <p className="m-0 text-black fw-medium" style={{fontSize:'16px'}}>Daniel - Self Made Programmer</p>
                            <p className="m-0 text-dark-emphasis" style={{fontSize:'12px'}}>470K subcribers</p>
                            </div>
                        <button type="button" className="btn btn-dark rounded-pill fw-medium ms-4 px-3" style={{fontSize:'14px'}}>Subscribe</button>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <i className='bi bi-hand-thumbs-up-fill me-2' style={{fontSize: "20px"}}></i>
                            <span className="fw-medium fs-6">5</span>
                        </div>
                        <div className="me-3">
                            <i className='bi bi-hand-thumbs-down-fill me-2' style={{fontSize: "20px"}}></i>
                            <span className="fw-medium fs-6">5</span>
                        </div>
                        
                        <div className="me-3 d-flex align-items-center">
                            <i className='bi bi-share me-2' style={{fontSize: "20px"}}></i>
                            <span className="fw-medium" style={{fontSize:'14px'}}>Share</span>
                        </div>
                        <div className="me-3">
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                </div>
                <div className="bg-light rounded-3 p-2">
                    <p className="fw-medium m-0" style={{fontSize: '16px'}}>6,056 views  Jul 3, 2023</p>
                    <p style={{fontSize: '14px'}}>Today the topic of my video is freeCodeCamp Review. Are their courses and studying approaches still valid for the year 2023? And I will share my thoughts what do I think about their certification level.</p>
                </div>
                <p style={{fontSize: '18px'}}>15 Comments</p>
                <div onClick={handleClick} className="d-flex align-items-center mb-4">
                    <img src='src\assets\Rex Logo (3).PNG' width="40" alt='test' className='rounded-circle' />
                    {!isCommenting ? (
                        <span className="ms-3">Add a comment...</span>
                    ) : (
                        <input type="text" className="form-control ms-2" placeholder="Add a comment..." autoFocus />
                    )}
                </div>
                <VideoComments/>
                <VideoComments/>

            </div>
        </>
  )
}
