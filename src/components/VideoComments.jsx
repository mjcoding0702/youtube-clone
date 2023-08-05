import { useDispatch } from 'react-redux';
import profileBackup from '../assets/profile-backup.png';
import { deleteComment, editComment } from '../features/videoSlice';
import { useState } from 'react';
import { ConfirmCommentModal } from './ConfirmCommentModal';

export default function VideoComments({commentContent,commentId, userDisplayName, userProfileURL, isUser}) {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');

  // Edit modal
  const [showEdit, setShowEdit] = useState(false);
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => {
    setNewComment(commentContent); // Set the initial value of the new comment
    setShowEdit(true);
  };
  const [isSavingEdit, setIsSavingEdit] = useState(false);
  const handleSaveEdit = () => {
    setIsSavingEdit(true);
    dispatch(editComment({ commentId: commentId, comment: newComment }))
      .then(() => {
        setIsSavingEdit(false);
        handleEditClose();
      })
      .catch(() => {
        setIsSavingEdit(false);
      });
  };

  // Delete modal
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleConfirmDelete = () => {
    setIsDeleting(true);
    dispatch(deleteComment(commentId))
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
      <div className='mb-4' style={{width: '90%'}}>
          <div className="d-flex">
              <img src={userProfileURL || profileBackup} width="40" height='40' alt='test' className='rounded-circle' />
              <div>
                <div className='d-flex align-items-center'>
                  <p className="m-0 ps-3 pe-1 fw-medium" style={{fontSize: '14px'}}>{userDisplayName}</p>
                  {isUser && (
                    <>
                      <i className='bi bi-pencil pe-1' style={{fontSize: '12px'}} onClick={handleEditShow}></i>  {/* edit comment */}
                      <i className='bi bi-trash text-danger' style={{fontSize: '12px'}} onClick={handleDeleteShow}></i> {/* delete comment */}
                    </>
                  )}
                </div>
                  <p className="m-0 ps-3 text-break">{commentContent}</p>
              </div>
          </div>
      </div>

      <ConfirmCommentModal
        show={showEdit}
        handleClose={handleEditClose}
        title="Edit Comment"
        handleConfirm={handleSaveEdit}
        confirmButtonText={isSavingEdit ? 'Saving comment...' : 'Save Changes'}
        isConfirming={isSavingEdit}
        confirmButtonVariant="success" // green button for edit
      >
        <textarea className='p-2 w-100' value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
      </ConfirmCommentModal>

      <ConfirmCommentModal
        show={showDelete}
        handleClose={handleDeleteClose}
        title="Delete Comment"
        handleConfirm={handleConfirmDelete}
        confirmButtonText={isDeleting ? 'Deleting comment...' : 'Delete'}
        isConfirming={isDeleting}
        confirmButtonVariant="danger" // red button for delete
      >
        Are you sure you want to delete this comment?
      </ConfirmCommentModal>
    </>
  )
}
