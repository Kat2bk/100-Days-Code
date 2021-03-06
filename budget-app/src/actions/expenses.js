// const ADD_EXPENSE = "ADD_EXPENSE";
// const REMOVE_EXPENSE = "REMOVE_EXPENSE";
// const EDIT_EXPENSE = "EDIT_EXPENSE";

// const initialState = {
//     expenses: [{
//         id: Date.now(),
//         description: "",
//         note: "",
//         amount: 0,
//         createdAt: 0
//     }]
// };

export const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: Date.now(),
        description,
        note,
        amount,
        createdAt
    }
})

export const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
}) 

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});