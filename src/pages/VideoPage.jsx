import { useEffect, useState } from "react";
import VideoCardSmall from "../components/VideoCardSmall";
import VideoDetails from "../components/VideoDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoById } from "../features/videoSlice";

export default function VideoPage() {
    const {videoId} = useParams();
    const dispatch = useDispatch();
    const video = useSelector((state) => state.video.video);

    useEffect(() => {
        dispatch(fetchVideoById(videoId));
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
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                    <VideoCardSmall imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaasdfasdfScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
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
