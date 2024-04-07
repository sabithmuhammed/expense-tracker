import { useRef, useState } from "react";
import { Items } from "../types";
const AddItem = ({setAddState,setItems}:{setAddState:React.Dispatch<React.SetStateAction<boolean>>,setItems:React.Dispatch<React.SetStateAction<Items[]>>}) => {
    const ref:LegacyRef<HTMLDivElement> |undefined = useRef()
    
    const [radio,setRadio] = useState<string>('Income')
    const [amount,setAmount] = useState<number>()
    const [description,setDescription] = useState<string>('')

    const handleModalClose = (e:React.MouseEvent<HTMLDivElement, MouseEvent>):void=>{
        if(e.target == ref.current){
            setAddState(false)
        }
    }
    const handleSubmission = (e:React.FormEvent)=>{
        e.preventDefault()
        const newItem:Items ={
            type:radio,
            amount:amount as number,
            description
        }
        setItems(i=>[newItem,...i])
        setAddState(false)
    }

    return (
        <div className="add-item-container" onClick={handleModalClose} ref={ref}>
            <form action="" onSubmit={handleSubmission}>
                <div className="radio-div">
                    <input type="radio" name="type" id="income"  onClick={()=>setRadio('Income')} checked={radio==="Income"}/>
                    <label htmlFor="income" className="label-btn">
                        Income
                    </label>
                    <input type="radio" name="type" id="expense" onClick={()=>setRadio('Expense')} checked={radio==="Expense"}/>
                    <label htmlFor="expense" className="label-btn">
                        Expense
                    </label>
                </div>
                <div className="">
                    <label htmlFor="money">Amount</label>
                    <input type="number" id="money" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
                </div>
                <div className="">
                    <label htmlFor="">Description</label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <button className="submit-btn">Add</button>
            </form>
        </div>
    );
};

export default AddItem;
