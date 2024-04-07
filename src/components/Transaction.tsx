import { Items } from "../types";
import Item from "./Item";

const Transaction = ({ items }: { items: Items[] }) => {
    return (
        <div className="transactions">
            <h3>Transactions</h3>
            {items.length!==0 && items.map((item) => <Item key={item.description} {...item} />)}
        </div>
    );
};

export default Transaction;
