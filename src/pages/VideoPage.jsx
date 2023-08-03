import { useState } from "react";
import VideoCardSmall from "../components/VideoCardSmall";
import VideoDetails from "../components/VideoDetails";

export default function VideoPage() {
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
                <VideoDetails></VideoDetails>
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
