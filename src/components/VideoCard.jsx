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

    //Edit feature starts here
    const dispatch = useDispatch();
    const [newTitle,setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newDuration, setNewDuration] = useState(duration);
    const [newThumbnailURL, setNewThumbnailURL] = useState(thumbnailURL);
    const [isSaving, setIsSaving] = useState(false);

    //Show Modal
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSaving(true);
        dispatch(editVideo({videoId, newTitle, newDescription, newDuration, newThumbnailURL}))
            .then(() => {
                // Clear the form values
                setNewTitle('');
                setNewDescription('');
                setNewDuration('');
                setNewThumbnailURL('');
                // Close the modal
            })
            .catch(() => {
                // Handle the error
            })
            .finally(() => {
                setIsSaving(false);
                handleClose();
            });
    };

    //Delete feature starts here
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleConfirmDelete = () => {
    setIsDeleting(true);
    dispatch(deleteVideo(videoId))
        .then(() => {
        setIsDeleting(false);
        handleDeleteClose();
        })
        .catch(() => {
        setIsDeleting(false);
        });
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
                            <i className='bi bi-pencil ms-2' style={{fontSize: '12px'}} onClick={handleShow}></i>  
                            <i className='bi bi-trash text-danger ms-1' style={{fontSize: '12px'}} onClick={handleDeleteShow}></i> 
                        </>
                    )}
                </div>
            </div>
        </div>

        <Modal show={show} onHide={isSaving ? null : handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Video Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} disabled={isSaving} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} disabled={isSaving} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="number" placeholder="Enter duration" value={newDuration} onChange={(e) => setNewDuration(e.target.value)} disabled={isSaving} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={(e) => setNewThumbnailURL(e.target.files[0])}  disabled={isSaving} />
                    </Form.Group>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} disabled={isSaving} >
                            Close
                        </Button>
                        <Button variant="primary" type="submit" disabled={isSaving} >
                            {isSaving ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>

        <Modal show={showDelete} onHide={isDeleting ? null : handleDeleteClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this video?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleDeleteClose} disabled={isDeleting}>
                Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete} disabled={isDeleting}>
                {isDeleting ? 'Deleting...' : 'Delete'}
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    )
}
