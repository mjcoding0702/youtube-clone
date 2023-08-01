import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';


function Chip({text, isActive}){
  return (
    <>
      {(isActive)? 
      (
        <span className="badge rounded text-white bg-black fw-normal fs-6 me-3" style={{padding: '10px 15px'}}>{text}</span>
      ): 
      (
         <span className="badge rounded text-black fw-normal fs-6 me-3" style={{padding: '10px 15px', backgroundColor:'rgba(0,0,0,0.05)'}}>{text}</span>
      )}
    </>
  )
}

function VideoCard({imageURL,logoURL,title,user,views,uploaded_at}){
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
          <p href="#" className="card card-video border-0 bg-transparent mb-4">
          <div className="image-container" style={{height: '200px', overflow: 'hidden'}}>
              <img src={imageURL} className="img-fluid" alt="test" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
      </div>
    </>
  )
}

export default function HomeContent() {
    return (
        <>
            <style>
              {`
                  @media (min-width: 576px) {
                      .ms-sm-250 {
                          margin-left: 250px !important;
                      }
                  }
              `}
            </style>

            <div className='my-2 px-4 ms-sm-250' style={{ height: '100%'}}>
              <div className='chip-container d-flex flex-nowrap overflow-hidden mb-4'>
                <Chip isActive={true} text='All'></Chip>
                <Chip text='Music'></Chip>
                <Chip text='Podcasts'></Chip>
                <Chip text='Finance'></Chip>
                <Chip text='Computer Science'></Chip>
                <Chip text='JavaScript'></Chip>
                <Chip text='Python'></Chip>
                <Chip text='Machine Learning'></Chip>
                <Chip text='Data Science'></Chip>
                <Chip text='C++'></Chip>
                <Chip text='Manga'></Chip>
                <Chip text='Live'></Chip>
                <Chip text='Lessons'></Chip>
                <Chip text='Firebase'></Chip>
                <Chip text='Motivation'></Chip>
                <Chip text='Watched'></Chip>
                <Chip text='React Routers'></Chip>
              </div>

              <div className='row'>
                  <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                  <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                  <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                  <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                  <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
              </div>
            </div>
        </>
    );
}
