import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoCard({imageURL,logoURL,videoId, title,user,views,uploaded_at,duration}){
    const uploadedDate = new Date(uploaded_at);
    const timeAgo = formatDistanceToNow(uploadedDate, { addSuffix: true });

    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n-1) + '…' : str;
    };

    //Initialize admin status
    const [isAdmin, setIsAdmin] = useState(false);

    // Get current location
    const location = useLocation();

    // Check if the current path includes '/admin'
    useEffect(() => {
        if (location.pathname.includes('/admin')) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [location]);

    //Format video duration 
    function formatDuration(duration) {
        let hours = Math.floor(duration / 3600);
        let minutes = Math.floor((duration - (hours * 3600)) / 60);
        let seconds = duration - (hours * 3600) - (minutes * 60);
    
        // Pad to two digits
        hours = hours >= 10 ? hours : "0" + hours;
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        seconds = seconds >= 10 ? seconds : "0" + seconds;
    
        // Format
        if (hours !== "00") {
            return hours + ":" + minutes + ":" + seconds;
        } else {
            return minutes + ":" + seconds;
        }
      }


    return (
      <>
        <a href={`/video/${videoId}`} className="card card-video border-0 bg-transparent mb-4 text-decoration-none flex-grow-1">
            <div className="image-container fluid position-relative" style={{height: '200px', overflow: 'hidden'}}>
                <img src={imageURL} className="img-fluid rounded" alt="test" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                <span className="position-absolute bottom-0 end-0 m-2 text-white p-1 fw-bold bg-black" style={{borderRadius: '5px', fontSize:'11px'}}>
                    {duration && formatDuration(duration)}
                </span>
            </div>
            <div className="card-video-details d-flex mt-2">
                <div className='me-3'>
                    <img src={logoURL} width="40" alt='test' className='rounded-circle'/>
                </div>
                <div>
                    <span className='fw-medium text-break'>{truncate(title, 65)}</span>
                    <br/>
                    <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{user}</span>
                    <br/>
                    <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{views} Views • {timeAgo}</span>
                    {isAdmin && (
                        <>
                            {/* <i className='bi bi-pencil pe-1' style={{fontSize: '12px'}} onClick={handleEditShow}></i>  
                            <i className='bi bi-trash text-danger' style={{fontSize: '12px'}} onClick={handleDeleteShow}></i>  */}
                        </>
                    )}
                </div>
            </div>
        </a>
      </>
    )
}
