import { useEffect, useState } from "react";

export default function Expenses() {


    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const expensesJSON = localStorage.getItem("expenses");
        if (expensesJSON) {
            setExpenses(JSON.parse(expensesJSON));
            console.log("expenses from local storage", expensesJSON);
        }
    }, [])

    return (
        <>
            <h2>Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            S.No.
                        </th>
                        <th>
                            Transaction Type
                        </th>
                        <th>
                            Amount
                        </th>
                    </tr></thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Expense
                        </td>
                        <td>
                            $100
                        </td>
                    </tr></tbody>

                    {expenses}
            </table>
        </>
    )
}