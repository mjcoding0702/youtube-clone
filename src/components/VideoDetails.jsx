import { useEffect, useState } from 'react';
import VideoComments from './VideoComments';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchComments, fetchLikeType, fetchLikesDislikes, incrementViews, likeVideo, updateLikeStatus, updateLikesDislikes } from '../features/videoSlice';
import { Spinner } from 'react-bootstrap';

export default function VideoDetails({video}) {
    const dispatch = useDispatch();

    //Video Data
    const uploadedDate = new Date(video.uploaded_at);
    const formattedDate = `${uploadedDate.toLocaleString('default', { month: 'short' })} ${uploadedDate.getDate()}, ${uploadedDate.getFullYear()}`;
    const videoURL = video.videourl; 

    //User Data
    const user = useSelector((state) => state.user.user)
    const userProfile = user.profileurl || 'src\\assets\\profile-backup.png';  //incase if google return 403 code

    //Comments Data
    const comments = useSelector((state) => state.video.comments)

    //Handle like
    const videoId = video.id;
    const userLikeStatus = useSelector((state) => state.video.userLikeStatus)
    const likesDislikes = useSelector((state) => state.video.likesDislikes);
   
    const handleLike = async (likeType) => {
        // Check if the user has already liked/disliked the video
        if (userLikeStatus.likeType !== likeType) {
            // Optimistic update
            if (likeType === 'like') {
                // Increase likes count and decrease dislikes count (if it's not already 0)
                dispatch(updateLikesDislikes({ 
                    likes: Number(likesDislikes.likes) + 1, 
                    dislikes: Number(likesDislikes.dislikes) > 0 ? Number(likesDislikes.dislikes) - 1 : 0 
                }));
                // Update userLikeStatus to 'like'
                dispatch(updateLikeStatus({likeType: 'like'}));
            } else {
                // Increase dislikes count and decrease likes count (if it's not already 0)
                dispatch(updateLikesDislikes({ 
                    likes: Number(likesDislikes.likes) > 0 ? Number(likesDislikes.likes) - 1 : 0, 
                    dislikes: Number(likesDislikes.dislikes) + 1 
                }));
                // Update userLikeStatus to 'dislike'
                dispatch(updateLikeStatus({likeType: 'dislike'}));
            }
    
            // Update the like/dislike status in the backend
            await dispatch(likeVideo({ userId: user.id, videoId: video.id, likeType }));
            // Fetch the updated likes and dislikes
            dispatch(fetchLikesDislikes(video.id));
        }
    };
    

    //Handle comment
    const [commentText, setCommentText] = useState('');
    const [isCommenting, setIsCommenting] = useState(false);

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        if (commentText) {
            setIsCommenting(true); 
            await dispatch(addComment({ userId: user.id, videoId: video.id, comment: commentText }));
            await dispatch(fetchComments(videoId));  //Refresh the comments
            setCommentText('');  
            setIsCommenting(false); 
        }
    };

    //Fetch likes and dislikes for video when component mount
    useEffect(() => {
        if (videoId){
            dispatch(incrementViews(videoId));  // Add this line
            dispatch(fetchLikesDislikes(videoId));
            dispatch(fetchLikeType({videoId, userId: user.id}))
            dispatch(fetchComments(videoId));
        }
    },[videoId])

    return (
        <>
            <div className="col-12 col-lg-8 col-xxl-9 px-0">
                {videoURL ? (
                    <div key={videoURL} style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                        <video controls style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain'}}>
                            <source src={videoURL} type="video/mp4"/>
                            {/* Fallback for browsers that don't support the <video> element */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : (
                    <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                        <video controls style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain'}}>
                            <source type="video/mp4"/>
                            {/* Fallback for browsers that don't support the <video> element */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
                <div className="video-title">
                    <p className="fw-bold fs-5 text-black">{video.title}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <div className="d-flex">
                            <img src={video.profileurl} width="40" alt='test' className='rounded-circle'/>
                            <div className="ms-3">
                            <p className="m-0 text-black fw-medium" style={{fontSize:'16px'}}>{video.name}</p>
                            <p className="m-0 text-dark-emphasis" style={{fontSize:'12px'}}>100K subcribers</p>
                            </div>
                        <button type="button" className="btn btn-dark rounded-pill fw-medium ms-4 px-3" style={{fontSize:'14px'}}>Subscribe</button>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="me-3" role='button'>
                            <i className={`bi ${userLikeStatus && userLikeStatus.likeType === 'like' ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'} me-2`} style={{fontSize: "20px"}} onClick={() => handleLike('like')}></i>
                            <span className="fw-medium fs-6">{likesDislikes.likes || 0}</span>
                        </div>
                        <div className="me-3" role='button'>
                            <i className={`bi ${userLikeStatus && userLikeStatus.likeType === 'dislike' ? 'bi-hand-thumbs-down-fill' : 'bi-hand-thumbs-down'} me-2`} style={{fontSize: "20px"}} onClick={() => handleLike('dislike')}></i>
                            <span className="fw-medium fs-6">{likesDislikes.dislikes || 0}</span>
                        </div>
                        
                        <div className="me-3 d-flex align-items-center">
                            <i className='bi bi-share me-2' style={{fontSize: "20px"}}></i>
                            <span className="fw-medium" style={{fontSize:'14px'}}>Share</span>
                        </div>
                        <div className="me-3">
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                </div>
                <div className="bg-light rounded-3 p-2">
                    <p className="fw-medium m-0" style={{fontSize: '16px'}}>{video.views || 0} views • {formattedDate}</p>
                    <p style={{fontSize: '14px'}}>{video.description}</p>
                </div>
                <p style={{fontSize: '18px'}}>{comments.length} Comments</p>
                <div className="d-flex align-items-center mb-4">
                    <img src={userProfile} width="40" alt='test' className='rounded-circle' />
                    <form onSubmit={handleCommentSubmit} className="d-flex" style={{width: '90%'}}>
                        <input 
                            type="text" 
                            className="form-control ms-2" 
                            placeholder="Add a comment..." 
                            value={commentText} 
                            onChange={(e) => setCommentText(e.target.value)} 
                            maxLength="400"
                            autoFocus 
                            required
                            disabled={isCommenting}
                        />
                        <button type="submit" className="btn btn-link text-primary text-decoration-none border border-secondary bg-dark text-white ms-4 fw-medium" style={{fontSize: '14px'}} disabled={isCommenting}>
                            {isCommenting ? 'Commenting...' : 'Comment'}
                        </button>
                    </form>
                </div>
                {(!comments || comments.length === 0) && (
                    <Spinner variant='primary'></Spinner>
                )}
                {comments && user && (
                    comments.map((comment) => (
                        <VideoComments key={comment.id} commentContent={comment.comment} commentId={comment.id} userDisplayName={comment.name} userProfileURL={comment.profileurl} isUser={user.id === comment.user_id}/>
                    ))
                )}
            </div>
        </>
  )
}
