import { createSlice } from "@reduxjs/toolkit";


//check account function
//add account function
//remove account function
const AccountType = {
    Admin: "Admin",
    Seller: "Seller",
    Insurance: "Insurance",
    Producer: "Producer",
    None: "None"

}
const accounts =  [
    {
        username: 'admin',
        password: 'admin',
        type: AccountType.Admin,
    },

    {
        username: 'seller',
        password: 'seller',
        type: AccountType.Seller
    },

    {
        username: 'insurance',
        password: 'insurance',
        type: AccountType.Insurance
    },

    {
        username: 'producer',
        password: 'producer',
        type: AccountType.Producer
    }
]

export const CheckAccount = createSlice({
    name: 'checkAccount',
    initialState: {
        isCorrect: false,
        isInAccount: false,
        typeAccount: AccountType.None
    },
    reducers: {
        checkValidAccount: (state,data) => {
            console.log(data.payload.username)
            console.log(data.payload.password)
   
            state.isCorrect = false
            state.isInAccount = false
            accounts.map((account) => {
                if(account.username == data.payload.username)
                {
                    if(account.password == data.payload.password){
                        state.isCorrect = true
                        state.isInAccount = true
                        state.typeAccount = account.type
                        
                        return {
                            ...state,
                            data: {
                                ...state.data
                            }
                        }
                    }                   
                }
            })
            if(state.isInAccount){
                window.location.href = 'http://localhost:3000/account-page'
            }
        }
    }

})

export const { checkValidAccount } = CheckAccount.actions;
export default CheckAccount.reducer;
export const selectorCheckAccount = (state) => state.checkAccount;