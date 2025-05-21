export  function addMoney(amount) {
    return {
        type: "ADD_MONEY",
        payload: amount
    }
}

export function withdraw(amount) {
    return {
        type: "WITHDRAW_MONEY",
        payload:amount
    }
}