import React from "react";
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => {
    console.log("props from list", props)
    return (
        <div>
        <h1>Expense List:</h1>
        {props.expenses.map(expense => (
            <ExpenseListItem {...expense} />
        ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);