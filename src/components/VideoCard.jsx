export default function VideoCard({imageURL,logoURL,title,user,views,uploaded_at}){
    return (
      <>
        <p href="#" className="card card-video border-0 bg-transparent mb-4">
            <div className="image-container fluid" style={{height: '200px', overflow: 'hidden'}}>
                <img src={imageURL} className="img-fluid rounded" alt="test" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="card-video-details d-flex mt-2">
                <div className='me-3'>
                    <img src={logoURL} width="40" alt='test' className='rounded-circle'/>
                </div>
                <div>
                    <span className='fw-medium'>{title}</span>
                    <br/>
                    <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{user}</span>
                    <br/>
                    <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{views} Views • {uploaded_at} Months Ago</span>
                </div>
            </div>
        </p>
      </>
    )
  }