import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadVideo } from '../features/videoSlice';
import { Modal } from 'react-bootstrap';

export default function VideoForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const userId = useSelector((state) => state.user.user.id);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false); //for spinner
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [videoKey, setVideoKey] = useState(Math.random()); 
    const [thumbnailKey, setThumbnailKey] = useState(Math.random()); 


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    //Limit the file size as the project is using Firebase's free plan. Broke T_T
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        const fileSize = file.size / (1024 * 1024); // size in MB
    
        if (fileSize > 200) {
            alert("The video file size should not exceed 200MB.");
            event.target.value = null;  // Clear the input field if video exceeded 200MB
        } else {
            setVideoFile(file);
        }
    };
    

    //Limit the file size as the project is using Firebase's free plan. Broke T_T
    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        const fileSize = file.size / (1024 * 1024); // size in MB
    
        if (fileSize > 5) {
            alert("The thumbnail file size should not exceed 5MB.");
            event.target.value = null;  // Clear the input field if thumbnail exceeded 5MB
        } else {
            setThumbnailFile(file);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if title and description meet the minimum length
        if (title.length < 35 || description.length < 35) {
            alert('Title and description must be at least 35 characters long.');
            return;
        } else if (duration > 7200) {
            alert('Video duration cannot exceed 2 hours.');
            return;
        }

        const formData = {title, description, duration, videoFile, thumbnailFile, userId} 

        setIsLoading(true);  // Set loading state to true when submission starts

        try {
            await dispatch(uploadVideo(formData)).unwrap();
            setTitle('');
            setDescription('');
            setDuration('');
            setVideoFile(null);
            setThumbnailFile(null);
            // Change key to clear input element for video/thumbnail
            setVideoKey(Math.random());  
            setThumbnailKey(Math.random()); 
            setIsModalOpen(true);  
        } catch(error){
            console.error('Failed to upload video:', error);
            alert('Failed to upload video. Please try refreshing the browser')
        } finally {
            setIsLoading(false);  // Set loading state back to false when submission ends
        }
    };


    return (
    <>
        <div className="d-flex justify-content-center align-items-center my-5">
            <div className="col-6 col-xl-5">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="text-center">Have a YouTuber Dream? <i className="bi bi-youtube" style={{fontSize:'30px', color: 'red'}}></i></h2>
                    <p className="mb-4 text-center">Upload your first video today!</p>
                </div>

                <form className="border border-secondary p-3 rounded" onSubmit={handleSubmit}>
                    <h5 className="mb-3">Fill up the form below:</h5>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Video Title<span className='text-danger fw-bold'> *</span></label>
                        <input type="text" className={`form-control ${title.length > 100 ? 'border-danger' : ''}`} id="title" value={title} required onChange={handleTitleChange} minLength='35' maxLength="100" />
                        <div className="form-text">{title.length}/100</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Video Description<span className='text-danger fw-bold'> *</span></label>
                        <textarea className={`form-control ${description.length > 500 ? 'border-danger' : ''}`} id="description" rows="3" value={description} required onChange={handleDescriptionChange} minLength='35' maxLength="500"></textarea>
                        <div className="form-text">{description.length}/500</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="duration" className="form-label">Video Duration (in seconds)<span className='text-danger fw-bold'> *</span></label>
                        <input type="number" className="form-control" id="duration" value={duration} required onChange={handleDurationChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="video" className="form-label">Upload Video<span className='text-danger fw-bold'> *</span></label>
                        <input type="file" className="form-control" id="video" accept="video/*" required onChange={handleVideoChange} key={videoKey}/>
                        <div className="form-text ms-1" style={{fontSize:'12px'}}>Accepted formats: .mp4, .mov, .avi, .flv, .wmv</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="thumbnail" className="form-label">Upload Thumbnail<span className='text-danger fw-bold'> *</span></label>
                        <input type="file" className="form-control" id="thumbnail" accept="image/*" required onChange={handleThumbnailChange} key={thumbnailKey}/>
                        <div className="form-text ms-1" style={{fontSize:'12px'}}>Accepted formats: .jpg, .jpeg, .png, .gif</div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
                        {isLoading ? 'Uploading...' : 'Upload!'}
                    </button>

                    {/* Show success message to user */}
                    <Modal show={isModalOpen} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Success!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your video has been successfully uploaded!</Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-primary" onClick={handleCloseModal}>Close</button>
                        </Modal.Footer>
                    </Modal>
                </form>
            </div>
        </div>
    </>
  )
}
