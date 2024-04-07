import { OverView } from "../types";
import SmallTile from "./SmallTile";

const Overview = ({balance,income,expense}:OverView) => {
    return (
        <div className="overview-container">
            <h2>Balance</h2>
            <p className="balance-money">${balance}</p>
            <div className="tile-container">
                <SmallTile type="Income" money={income}/>
                <SmallTile type="Expense" money={expense}/>
            </div>
        </div>
    );
};

export default Overview;
