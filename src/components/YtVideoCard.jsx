import { formatDistanceToNow } from 'date-fns';

export default function YtVideoCard({videoId, thumbnailURL,title,user,uploaded_at}){
    //Format the time passed after uploaded
    const uploadedDate = new Date(uploaded_at);
    const timeAgo = formatDistanceToNow(uploadedDate, { addSuffix: true });

    //Limit the word characters shown
    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n-1) + '…' : str;
    };

    return (
      <>
        <div className="card card-video border-0 bg-transparent mb-4 text-decoration-none flex-grow-1">
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" className="image-container fluid position-relative" style={{height: '200px', overflow: 'hidden'}}>
                <img src={thumbnailURL} className="img-fluid rounded" alt="test" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </a>
            <div className="card-video-details d-flex mt-2">
                <div>
                    <span className='fw-medium text-break'>{truncate(title, 100)}</span>
                    <br/>
                    <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{user} • {timeAgo}</span>
                </div>
            </div>
        </div>


      </>
    )
}
