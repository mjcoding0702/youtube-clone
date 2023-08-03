export default function TagChip({text, isActive}){
    return (
      <>
        {(isActive)? 
        (
          <span className="badge rounded text-white bg-black fw-normal fs-6 me-3" style={{padding: '10px 15px'}}>{text}</span>
        ): 
        (
           <span className="badge rounded text-black fw-normal fs-6 me-3" style={{padding: '10px 15px', backgroundColor:'rgba(0,0,0,0.05)'}}>{text}</span>
        )}
      </>
    )
  }