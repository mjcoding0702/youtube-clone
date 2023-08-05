import { Modal, Button } from 'react-bootstrap';

export function ConfirmCommentModal({ show, handleClose, title, children, handleConfirm, confirmButtonText, isConfirming, confirmButtonVariant }) {
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant={confirmButtonVariant} onClick={handleConfirm} disabled={isConfirming}>
              {isConfirming ? 'Processing...' : confirmButtonText}
            </Button>
          </Modal.Footer>
        </Modal>
      );
}
