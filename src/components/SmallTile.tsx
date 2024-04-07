type IncomeTile = {
    type:string
    money:number
}
const SmallTile = ({type,money}:IncomeTile) => {
  return (
    <div className="small-tile">
      <div className={`logo ${type==='Income'?'green':''}`}>
        {type==='Income'?'I':'E'}
      </div>
      <div className="money-div">
        <p className={`income-heading ${type==='Expense'?'red':''}`}>{type}</p>
        <p className="income-money">${money}</p>
      </div>
    </div>
  )
}

export default SmallTile
