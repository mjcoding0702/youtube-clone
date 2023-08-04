import profileBackup from '../assets/profile-backup.png';

export default function VideoComments({comment,userId}) {
  return (
    <div className='mb-4' style={{width: '90%'}}>
        <div className="d-flex">
            <img src={profileBackup} width="40" height='40' alt='test' className='rounded-circle' />
            <div>
                <p className="m-0 ps-3 fw-medium" style={{fontSize: '12px'}}>{userId}</p>
                <p className="m-0 ps-3 text-break">{comment}</p>
            </div>
        </div>
    </div>
  )
}
