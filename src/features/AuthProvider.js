import { createSlice } from "@reduxjs/toolkit";


//check account function
//add account function
//remove account function
export const AccountType = {
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

export const AuthProvider = createSlice({
    name: 'authProvider',
    initialState: {
        isCorrect: false,
        isInAccount: false,
        accountType: AccountType.None,
        data : []
    },
    reducers: {
        checkValidAccount: (state,data) => {
   
            state.isCorrect = false
            state.isInAccount = false
            accounts.map((account) => {
                if(account.username == data.payload.username)
                {
                    if(account.password == data.payload.password){
                        state.isCorrect = true
                        state.isInAccount = true
                        state.accountType = account.type
                        
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
               
            }
        },
        logoutAccount: (state) => {
            state.isCorrect = false
            state.isInAccount = false
            state.accountType = AccountType.None
        }
    }

})

export const { checkValidAccount, logoutAccount } = AuthProvider.actions;
export default AuthProvider.reducer;
export const selectorAuthProvider = (state) => state.authProvider;