import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { deleteVideo, editVideo, fetchUserVideos } from '../features/videoSlice';

export default function VideoCard({thumbnailURL,logoURL,videoId, title,description, user,views,uploaded_at,duration}){
    //Format the time passed after uploaded
    const uploadedDate = new Date(uploaded_at);
    const timeAgo = formatDistanceToNow(uploadedDate, { addSuffix: true });

    //Limit the word characters shown
    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n-1) + '…' : str;
    };

    //Initialize admin status
    const [isAdmin, setIsAdmin] = useState(false);

    // Get current location
    const location = useLocation();

    // Check if the current path includes '/admin'
    useEffect(() => {
        if (location.pathname.includes('/admin')) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [location]);

    //Format video duration 
    function formatDuration(duration) {
        let hours = Math.floor(duration / 3600);
        let minutes = Math.floor((duration - (hours * 3600)) / 60);
        let seconds = duration - (hours * 3600) - (minutes * 60);

        // Pad to two digits
        hours = hours >= 10 ? hours : "0" + hours;
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        seconds = seconds >= 10 ? seconds : "0" + seconds;

        // Format
        if (hours !== "00") {
            return hours + ":" + minutes + ":" + seconds;
        } else {
            return minutes + ":" + seconds;
        }
    }

    //Edit and delete start here
    const [actionType, setActionType] = useState(null); // 'edit' or 'delete'
    const [show, setShow] = useState(false)

    const handleShowEdit = () => {
        setActionType('edit');
        setShow(true);
      };
      
    const handleShowDelete = () => {
        setActionType('delete');
        setShow(true);
    };

    const handleClose = () => {
        setShow(false)
    }
      
    //Edit feature starts here
    const dispatch = useDispatch();
    const [newTitle,setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newDuration, setNewDuration] = useState(duration);
    const [newThumbnailURL, setNewThumbnailURL] = useState(thumbnailURL);
    const [isSaving, setIsSaving] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Check if title and description meet the minimum length
        if (newTitle.length < 35 || newDescription.length < 35) {
            alert('Title and description must be at least 35 characters long.');
            return;
        } else if (newDuration > 7200) {
            alert('Video duration cannot exceed 2 hours.');
            return;
        }
    
        setIsSaving(true);
        dispatch(editVideo({ videoId, newTitle, newDescription, newDuration, newThumbnailURL }))
            .then(() => {
                setIsSaving(false);
                handleClose();
        })
    };
    

    //Delete feature starts here
    const [isDeleting, setIsDeleting] = useState(false);

    const handleConfirmDelete = () => {
    setIsDeleting(true);
    dispatch(deleteVideo(videoId))
        .then(() => {
            setIsDeleting(false);
            handleClose();
        })
        
    };
    
    return (
      <>
        <div className="card card-video border-0 bg-transparent mb-4 text-decoration-none flex-grow-1">
            <a href={`/video/${videoId}`} className="image-container fluid position-relative" style={{height: '200px', overflow: 'hidden'}}>
                <img src={thumbnailURL} className="img-fluid rounded" alt="test" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                <span className="position-absolute bottom-0 end-0 m-2 text-white p-1 fw-bold bg-black" style={{borderRadius: '5px', fontSize:'11px'}}>
                    {duration && formatDuration(duration)}
                </span>
            </a>
            <div className="card-video-details d-flex mt-2">
                <div className='me-3'>
                    <img src={logoURL} width="40" alt='test' className='rounded-circle'/>
                </div>
                <div>
                    <span className='fw-medium text-break'>{truncate(title, 65)}</span>
                    <br/>
                    <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{user}</span>
                    <br/>
                    <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{views} Views • {timeAgo}</span>
                    {isAdmin && (
                        <>
                           <i className='bi bi-pencil ms-2' style={{fontSize: '12px'}} onClick={handleShowEdit}></i>
                           <i className='bi bi-trash text-danger ms-1' style={{fontSize: '12px'}} onClick={handleShowDelete}></i>
                        </>
                    )}
                </div>
            </div>
        </div>

        <Modal show={show} onHide={isSaving || isDeleting ? null : handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{actionType === 'edit' ? 'Edit Video Details' : 'Confirm Delete'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {actionType === 'edit' ? (
                    <Form onSubmit={handleSubmit}>
                        <h5 className="mb-3">Fill up the form below:</h5>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="title">Video Title<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control type="text" className={`form-control ${newTitle.length > 100 ? 'border-danger' : ''}`} id="title" value={newTitle} required onChange={(e) => setNewTitle(e.target.value)} minLength='35' maxLength="100" />
                            <div className="form-text">{newTitle.length}/100</div>
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="description">Video Description<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control as="textarea" className={`form-control ${newDescription.length > 500 ? 'border-danger' : ''}`} id="description" rows="3" value={newDescription} required onChange={(e) => setNewDescription(e.target.value)} minLength='35' maxLength="500" />
                            <div className="form-text">{newDescription.length}/500</div>
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="duration">Video Duration (in seconds)<span className='text-danger fw-bold'> *</span></Form.Label>
                            <Form.Control type="number" className="form-control" id="duration" value={newDuration} required onChange={(e) => setNewDuration(e.target.value)} />
                        </Form.Group>
                    
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="thumbnail">Upload Thumbnail</Form.Label>
                            <Form.Control type="file" className="form-control" id="thumbnail" accept="image/*" onChange={(e) => setNewThumbnailURL(e.target.files[0])} disabled={isSaving} />
                            <div className="form-text ms-1" style={{fontSize:'12px'}}>Accepted formats: .jpg, .jpeg, .png, .gif</div>
                        </Form.Group>
                    </Form>
                
                ) : (
                    'Are you sure you want to delete this video?'
                )}
            </Modal.Body>
            {actionType === 'edit' ? (
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} disabled={isSaving}>
                        Close
                    </Button>
                    <Button variant="success" type="submit" onClick={handleSubmit} disabled={isSaving}> {/* Changed to success */}
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </Modal.Footer>
            ) : (
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} disabled={isDeleting}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete} disabled={isDeleting}> {/* Already set to danger */}
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </Button>
                </Modal.Footer>
            )}
        </Modal>

      </>
    )
}
