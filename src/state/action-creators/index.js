export const MONEY_WITHDRAW = 'withdraw';
export const MONEY_DEPOSIT = 'deposit';

export const withdrawMoney = (amount) => ({
    type: MONEY_WITHDRAW,
    payload: amount
});

export const depositMoney = (amount) => ({
    type: MONEY_DEPOSIT,
    payload: amount
});