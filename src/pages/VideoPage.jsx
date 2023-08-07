import { useEffect } from "react";
import VideoCardSmall from "../components/VideoCardSmall";
import VideoDetails from "../components/VideoDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVideos, fetchVideoById } from "../features/videoSlice";

export default function VideoPage() {
    const {videoId} = useParams();
    const dispatch = useDispatch();
    const video = useSelector((state) => state.video.video);
    const allVideos = useSelector((state) => state.video.allVideos);

    console.log(allVideos)

    useEffect(() => {
        dispatch(fetchVideoById(videoId));
        dispatch(fetchAllVideos());
    }, [dispatch, videoId])


    return (
    <>
        {/* Custom CSS Class */}
        <style>
            {`@media (min-width: 1700px) {
            .px-custom {
                padding-left: 5rem !important;
                padding-right: 5rem !important;
            }}
            
            @media (min-width: 1800px) {
                .px-custom {
                    padding-left: 8rem !important;
                    padding-right: 8rem !important;
                }}`
            }
        </style>

        <div className="container-fluid mt-3 px-4 px-md-5 px-custom">
            <div className='row'>
                <VideoDetails video={video}></VideoDetails>
                <div className="col-lg-4 col-xxl-3 px-0 px-lg-3">
                    {allVideos && (
                        allVideos.map((video) => (
                            <VideoCardSmall key={video.id} videoId={video.id} imageURL={video.thumbnailurl} title={video.title} user={video.name} views={video.views} uploaded_at={video.uploaded_at} duration={video.duration}/>
                        ))
                    )}
                </div>
            </div>
        </div>
    </>
  )
}
