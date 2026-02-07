import React, { useEffect, useState } from "react";

export default function AddExpense(){

    const [amount,setAmount] = useState(0);
   

    function submitExpenseHandler(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("submit btn clicked");

        //TODO: Add to expenses array in local storage
        //  
    }

    function changeHandler(e:React.ChangeEvent<HTMLInputElement>){
        setAmount(Number(e.target.value))
    }

    return (
        <>
        <h2>Add Expense</h2>

        <form onSubmit={submitExpenseHandler}>
            <input type="number" placeholder="Type Amount" value={amount} onChange={changeHandler}/>
            <button type="submit">Add</button>
        </form>

        </>
    )
}