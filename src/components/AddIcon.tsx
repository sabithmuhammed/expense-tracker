

const AddIcon = ({setAddState}:{setAddState:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <button className="add-icon" onClick={()=>setAddState(true)}>
      +
    </button>
  )
}

export default AddIcon
