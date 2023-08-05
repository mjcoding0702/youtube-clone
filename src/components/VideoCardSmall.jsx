import { formatDistanceToNow } from "date-fns";

export default function VideoCardSmall({videoId, imageURL, title, user, views, uploaded_at, duration}){
    const uploadedDate = new Date(uploaded_at);
    const timeAgo = formatDistanceToNow(uploadedDate, { addSuffix: true });

    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n-1) + '…' : str;
    };

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
        <a href={`/video/${videoId}`} className="card mb-3 w-100 text-decoration-none" style={{height: '98px'}}>
            <div className="row g-0">
                <div className="col-4 col-md-3 col-lg-3 col-xl-4 position-relative" style={{height: '94px'}}>
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                      <img src={imageURL} className="img-fluid rounded-start" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                      <span className="position-absolute bottom-0 end-0 m-2 text-white p-1 fw-bold bg-black" style={{borderRadius: '5px', fontSize:'11px'}}>
                        {duration && formatDuration(duration)}
                      </span>
                    </div>
                </div>
                <div className="col-8 col-md-6 col-lg-9 col-xl-8">
                    <div className="ps-2 pt-1">
                        <p className='fw-medium lh-sm mb-3' style={{fontSize: '14px'}}>{truncate(title, 57)}</p>
                        <p className='text-dark-emphasis mb-0' style={{fontSize:'10px'}}>{user}</p>
                        <p className='text-dark-emphasis' style={{fontSize:'10px'}}>{views} Views • {timeAgo}</p>
                    </div>
                </div>
            </div>
        </a>
      </>
    )
  }
  