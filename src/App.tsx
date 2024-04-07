import AddIcon from "./components/AddIcon";
import AddItem from "./components/AddItem";
import Overview from "./components/Overview";
import Transaction from "./components/Transaction";
import { useEffect, useState } from "react";
import { Items, OverView } from "./types";

function App() {
    const [items, setItems] = useState<Items[]>([]);
    const [addState, setAddState] = useState<boolean>(false);
    const [overView, setOverView] = useState<OverView>({
        balance: 0,
        income: 0,
        expense: 0,
    });
    useEffect(() => {
        const income = items.reduce((acc, curr) => {
            if (curr.type === "Income") {
                return acc + curr.amount;
            }
            return acc;
        }, 0);
        const expense = items.reduce((acc, curr) => {
            if (curr.type === "Expense") {
                return acc + curr.amount;
            }
            return acc;
        }, 0);
        const balance = income - expense;
        setOverView({ balance, income, expense });
    }, [items]);

    return (
        <div className="container">
            <Overview {...overView}></Overview>
            {addState ? (
                <AddItem setAddState={setAddState} setItems={setItems} />
            ) : (
                <AddIcon setAddState={setAddState} />
            )}

            <Transaction items={items}></Transaction>
        </div>
    );
}

export default App;
