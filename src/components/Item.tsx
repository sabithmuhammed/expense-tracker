import { Items } from "../types"

const Item = ({type,description,amount}:Items) => {
  return (
    <div className="item">
      <div className={`logo ${type==='Income'?'green':''}`}>{type==='Income'?'I':'E'}</div>
      <div className="description">{description}</div>
      <div className="amount">${amount}</div>
    </div>
  )
}

export default Item
