import { useState } from 'react';
import VideoComments from './VideoComments';
import { useSelector } from 'react-redux';

export default function VideoDetails({video}) {
    const [isCommenting, setIsCommenting] = useState(false);

    //Video Data
    const uploadedDate = new Date(video.uploaded_at);
    const formattedDate = `${uploadedDate.toLocaleString('default', { month: 'short' })} ${uploadedDate.getDate()}, ${uploadedDate.getFullYear()}`;
    const videoURL = video.videourl; 

    //User Data
    const user = useSelector((state) => state.user.user)
    const userProfile = user.profileurl || 'src\\assets\\profile-backup.png';  //incase if google return 403 code
    console.log(user)

    const handleClick = () => {
        setIsCommenting(!isCommenting);
    };

    return (
        <>
            <div className="col-12 col-lg-8 col-xxl-9 px-0">
                {videoURL ? (
                    <div key={videoURL} className="embed-responsive embed-responsive-16by9">
                        <video className="embed-responsive-item" controls style={{width: '100%'}}>
                            <source src={videoURL} type="video/mp4"/>
                            {/* Fallback for browsers that don't support the <video> element */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : (
                    <div className="embed-responsive embed-responsive-16by9">
                        <video className="embed-responsive-item" controls style={{width: '100%'}}>
                            <source type="video/mp4"/>
                            {/* Fallback for browsers that don't support the <video> element */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
                <div className="video-title">
                    <p className="fw-bold fs-5 text-black">{video.title}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <div className="d-flex">
                            <img src={userProfile} width="40" alt='test' className='rounded-circle'/>
                            <div className="ms-3">
                            <p className="m-0 text-black fw-medium" style={{fontSize:'16px'}}>{user.name}</p>
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
                    <p className="fw-medium m-0" style={{fontSize: '16px'}}>{video.views} views • {formattedDate}</p>
                    <p style={{fontSize: '14px'}}>{video.description}</p>
                </div>
                <p style={{fontSize: '18px'}}>15 Comments</p>
                <div onClick={handleClick} className="d-flex align-items-center mb-4">
                    <img src={userProfile} width="40" alt='test' className='rounded-circle' />
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
