import SideMenu from '../components/SideMenu'
import TagChip from '../components/TagChip'
import VideoCard from '../components/VideoCard'

export default function Home() {
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
          <div className='chip-container d-flex flex-nowrap overflow-hidden mb-4'>
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

          <div className='row'>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
              <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3} cardHeight={200}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
              <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3} cardHeight={200}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
              <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3} cardHeight={200}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
              <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3} cardHeight={200}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
              <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3} cardHeight={200}/>
            </div>
          </div>
      </div>
    </>
  )
}
