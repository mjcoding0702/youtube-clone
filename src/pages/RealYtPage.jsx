import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../features/fetchFromAPI'
import SideMenu from '../components/SideMenu';
import TagChip from '../components/TagChip';
import { Spinner } from 'react-bootstrap';
import YtVideoCard from '../components/YtVideoCard';
import he from 'he';


export default function RealYtPage() {
    const [ytVideos,setYtVideos] = useState('');
    const [query, setQuery] = useState('Andrew Tate')
    const [activeChip, setActiveChip] = useState('Andrew Tate');

    useEffect(() => {
        fetchFromAPI(query)
        .then(data => setYtVideos(data.items))
        .catch(error => console.error(error));
    }, [query]); 

    const handleTagClick = (text) => {
        setQuery(text);
        setActiveChip(text);
    };
    
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
                    <TagChip isActive={activeChip === 'Andrew Tate'} text='Andrew Tate' onClick={() => handleTagClick('Andrew Tate')}></TagChip>
                    <TagChip isActive={activeChip === 'Sigma School'} text='Sigma School' onClick={() => handleTagClick('Sigma School')}></TagChip>
                    <TagChip isActive={activeChip === 'Learn App Code'} text='Learn App Code' onClick={() => handleTagClick('Learn App Code')}></TagChip>
                    <TagChip isActive={activeChip === 'Chris Heria'} text='Chris Heria' onClick={() => handleTagClick('Chris Heria')}></TagChip>
                    <TagChip isActive={activeChip === 'Software Engineer'} text='Software Engineer' onClick={() => handleTagClick('Software Engineer')}></TagChip>
                    <TagChip isActive={activeChip === 'Toastmasters International'} text='Toastmasters International' onClick={() => handleTagClick('Toastmasters International')}></TagChip>
                    <TagChip isActive={activeChip === 'LeetCode'} text='LeetCode' onClick={() => handleTagClick('LeetCode')}></TagChip>
                    <TagChip isActive={activeChip === 'Muse Asia'} text='Muse Asia' onClick={() => handleTagClick('Muse Asia')}></TagChip>
                    <TagChip isActive={activeChip === 'Ani One Asia'} text='Ani One Asia' onClick={() => handleTagClick('Ani One Asia')}></TagChip>
                    <TagChip isActive={activeChip === 'C++'} text='C++' onClick={() => handleTagClick('C++')}></TagChip>
                    <TagChip isActive={activeChip === 'React JS'} text='React JS' onClick={() => handleTagClick('React JS')}></TagChip>
                    <TagChip isActive={activeChip === 'Motivation Podcast'} text='Motivation Podcast' onClick={() => handleTagClick('Motivation Podcast')}></TagChip>
                    <TagChip isActive={activeChip === 'Coding Bootcamp'} text='Coding Bootcamp' onClick={() => handleTagClick('Coding Bootcamp')}></TagChip>
                    <TagChip isActive={activeChip === 'Firebase'} text='Firebase' onClick={() => handleTagClick('Firebase')}></TagChip>
                    <TagChip isActive={activeChip === 'Mr Beast'} text='Mr Beast' onClick={() => handleTagClick('Mr Beast')}></TagChip>
                </div>

                <div>
                    <h3>{`Search Result: ${query}`}</h3>
                    <p className='text-muted'>Click chips above to search for videos from real YouTube!</p>
                </div>

                <div className='row d-flex flex-wrap'>
                    {(!ytVideos || ytVideos.length === 0) && (
                    <Spinner variant='primary'></Spinner>
                    )}
                    {(ytVideos) && (
                        ytVideos.map((video) => {
                            const decodedTitle = he.decode(video.snippet.title);
                            return (
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 d-flex" key={video.id.videoId}>
                                <YtVideoCard videoId={video.id.videoId} thumbnailURL={video.snippet.thumbnails.high.url} title={decodedTitle} user={video.snippet.channelTitle} uploaded_at={video.snippet.publishedAt}/>
                            </div>
                        );
                    })
                    )}
                </div>
            </div>
        </>
        
    )
}
