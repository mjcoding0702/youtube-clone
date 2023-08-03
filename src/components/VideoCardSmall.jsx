export default function VideoCardSmall({imageURL, logoURL, title, user, views, uploaded_at, duration}){
  
    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n-1) + '…' : str;
    };
    
    return (
      <>
        <a href="/video/1234" className="card mb-3 w-100 text-decoration-none" style={{height: '98px'}}>
            <div className="row g-0">
                <div className="col-4 col-md-3 col-lg-3 col-xl-4 position-relative" style={{height: '94px'}}>
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                      <img src={imageURL} className="img-fluid rounded-start" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                      <span className="position-absolute bottom-0 end-0 m-2 text-white p-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '5px'}}>
                        {duration}
                      </span>
                    </div>
                </div>
                <div className="col-8 col-md-6 col-lg-9 col-xl-8">
                    <div className="ps-2 pt-1">
                        <p className='fw-medium lh-sm mb-3' style={{fontSize: '14px'}}>{truncate(title, 57)}</p>
                        <p className='text-dark-emphasis mb-0' style={{fontSize:'10px'}}>{user}</p>
                        <p className='text-dark-emphasis' style={{fontSize:'10px'}}>{views} Views • {uploaded_at} Months Ago</p>
                    </div>
                </div>
            </div>
        </a>
      </>
    )
  }
  