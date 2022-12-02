import { createSlice } from "@reduxjs/toolkit";


//check account function
//add account function
//remove account function

const accounts =  [
    {
        username : 'admin',
        password : 'admin'
    },

    {
        username : 'hello',
        password : 'goodbye'
    }
]

export const CheckAccount = createSlice({
    name: 'checkAccount',
    initialState: {
        isCorrect: false,
    },
    reducers: {
        checkValidAccount: (state,data) => {
            let isCorrect = false;
            console.log(data.payload.username)
            console.log(data.payload.password)
            console.log("Test Redux OK")        
            state.isCorrect = false
            accounts.map((account) => {
                if(account.username == data.payload.username)
                {
                    if(account.password == data.payload.password){
                        state.isCorrect = true;
                        isCorrect = true;
                        console.log("Correct username password")
                        console.log(state.isCorrect)
                        return {
                            ...state,
                            data: {
                                ...state.data
                            }
                        }
                    }                   
                }
            })
            if(!isCorrect)
                console.log("Incorrect username or password")
        }
    }

})

export const { checkValidAccount } = CheckAccount.actions;
export default CheckAccount.reducer;
export const selectorCheckAccount = (state) => state.checkAccount;