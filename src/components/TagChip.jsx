export default function TagChip({text, isActive, onClick}){
    return (
      <>
        {(isActive)? 
        (
          <span onClick={onClick} className="badge rounded text-white bg-black fw-normal fs-6 me-3" style={{padding: '10px 15px', cursor: 'pointer'}}>{text}</span>
        ): 
        (
           <span onClick={onClick} className="badge rounded text-black fw-normal fs-6 me-3" style={{padding: '10px 15px', backgroundColor:'rgba(0,0,0,0.05)', cursor: 'pointer'}}>{text}</span>
        )}
      </>
    )
  }