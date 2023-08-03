
export default function VideoComments() {
  return (
    <div className='mb-4'>
        <div className="d-flex">
            <img src='src\assets\Rex Logo (3).PNG' width="40" height='40' alt='test' className='rounded-circle' />
            <div>
                <p className="m-0 ps-3 fw-medium" style={{fontSize: '12px'}}>@cmj_0702</p>
                <p className="m-0 ps-3">This is a commentt</p>
                <div className="d-flex">
                    <div className="ms-3">
                        <i className='bi bi-hand-thumbs-up me-2' style={{fontSize: "18px"}}></i>
                        <span className="text-muted">5</span>
                    </div>
                    <div className="ms-3">
                        <i className='bi bi-hand-thumbs-down me-2' style={{fontSize: "18px"}}></i>
                        <span className="text-muted">5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
