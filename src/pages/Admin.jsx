import { useEffect } from 'react'
import SideMenu from '../components/SideMenu'
import { fetchUserVideos } from '../features/videoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import VideoCard from '../components/VideoCard';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  const allVideos = useSelector((state) => state.video.allVideos);
  const navigate = useNavigate();

  useEffect(() => {
      if (!user.id){
        alert("Log out and sign in again to view")
        navigate('/home')
      }
      dispatch(fetchUserVideos(user.id));
  }, [dispatch, user.id, allVideos, navigate])

  return (
    <>
      {/* Custom CSS Class */}
      <style>
        {`@media (min-width: 576px) {
          .ms-sm-250 {
              margin-left: 250px !important;
          }}`
        }
      </style>

      <SideMenu></SideMenu>

      <div className='my-2 px-4 ms-sm-250' style={{ height: '100%'}}>
          <div className='row d-flex flex-wrap'>
            {(!allVideos || allVideos.length === 0) && (
              <Spinner variant='primary'></Spinner>
            )}
            {(allVideos) && (
              allVideos.map((video) => (
                <>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 d-flex" key={video.id}>
                    <VideoCard thumbnailURL={video.thumbnailurl} logoURL={video.profileurl} videoId={video.id} title={video.title} description={video.description} user={video.name} views={video.views} uploaded_at={video.uploaded_at} duration={video.duration}/>
                  </div>
                </>
              ))
            )}
          </div>
      </div>
    </>
  )
}
