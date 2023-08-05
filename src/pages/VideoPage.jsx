import { useEffect, useState } from "react";
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

        <div className="container-fluid mt-3 px-5 px-custom">
            <div className='row'>
                <VideoDetails video={video}></VideoDetails>
                <div className="col-lg-4 col-xxl-3 px-0 px-lg-3">
                    {allVideos && (
                        allVideos.map((video) => (
                            <VideoCardSmall key={video.id} imageURL={video.thumbnailurl} title={video.title} user={video.name} views={video.views} uploaded_at={video.uploaded_at} duration={video.duration}/>
                        ))
                    )}
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = '9d8f7g6h5j4k3l2m1n0o9p8q7r6s5t4u3v2w1x0y9z8a7b6c5d4e3f2g1h0i9j8k7l6m5n4o3p2q1r0s9t8u7v6w5x4y3z2a1b0c' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = '12345678911234567891123456789112345' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                
                </div>
            </div>
        </div>
    </>
  )
}
