import { useEffect } from 'react';
import SideMenu from '../components/SideMenu'
import TagChip from '../components/TagChip'
import VideoCard from '../components/VideoCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVideos } from '../features/videoSlice';
import { Spinner } from 'react-bootstrap';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAllVideos());
  }, [dispatch])

  const allVideos = useSelector((state) => state.video.allVideos);

  console.log(allVideos)

  return (
    <>
      {/* Custom CSS Class */}
      <style>
      {`
        .chip-container {
          overflow-x: auto;
        }
        .chip-container::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 576px) {
          .ms-sm-250 {
            margin-left: 250px !important;
          }
        }
      `}
      </style>

      <SideMenu></SideMenu>

      <div className='my-2 px-4 ms-sm-250' style={{ height: '100%'}}>
          <div className='chip-container d-flex flex-nowrap overflow-scroll mb-4'>
              <TagChip isActive={true} text='All'></TagChip>
              <TagChip text='Music'></TagChip>
              <TagChip text='Podcasts'></TagChip>
              <TagChip text='Finance'></TagChip>
              <TagChip text='Computer Science'></TagChip>
              <TagChip text='JavaScript'></TagChip>
              <TagChip text='Python'></TagChip>
              <TagChip text='Machine Learning'></TagChip>
              <TagChip text='Data Science'></TagChip>
              <TagChip text='C++'></TagChip>
              <TagChip text='Manga'></TagChip>
              <TagChip text='Live'></TagChip>
              <TagChip text='Lessons'></TagChip>
              <TagChip text='Firebase'></TagChip>
              <TagChip text='Motivation'></TagChip>
              <TagChip text='Watched'></TagChip>
              <TagChip text='React Routers'></TagChip>
          </div>

          <div className='row d-flex flex-wrap'>
            {(!allVideos || allVideos.length === 0) && (
              <Spinner variant='primary'></Spinner>
            )}
            {(allVideos) && (
              allVideos.map((video) => (
                <>
                  <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 d-flex" key={video.id}>
                    <VideoCard thumbnailURL={video.thumbnailurl} logoURL={video.profileurl} videoId={video.id} title={video.title} user={video.name} views={video.views} uploaded_at={video.uploaded_at} duration={video.duration}/>
                  </div>
                </>
              ))
            )}
          </div>
      </div>
    </>
  )
}

