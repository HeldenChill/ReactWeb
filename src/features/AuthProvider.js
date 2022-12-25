import { createSlice } from "@reduxjs/toolkit";



export const ProductType = ["Fan" ,"TV" ,"Fridge", "Car"]
export const ProductStatus = ["In Stock", "On Sale", "Under Warranty", "Error"]
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
        position: "Admin1",
    },

    {
        username: 'seller',
        password: 'seller',
        type: AccountType.Seller,
        position: "Seller1",
    },

    {
        username: 'insurance',
        password: 'insurance',
        type: AccountType.Insurance,
        position: "Insurance1",
    },

    {
        username: 'producer',
        password: 'producer',
        type: AccountType.Producer,
        position: "Producer1",
    }
]

let tableData = [
      {
        id: 0,
        name: "Electric Fan",
        type: "Fan",
        code: "EF001",
        error_time: 0,
        price: 10,
        status: "In Stock",
        position: "Producer1",
        produced_by: "Producer1",
        produced_time: 0,
      },
      {
        id: 1,
        name: "Ceilling Fan",
        type: "Fan",
        code: "EF002",
        error_time: 0,
        price: 10,
        status: "In Stock",
        position: "Producer1",
        produced_by: "Producer1",
        produced_time: 0,
        sold_time: 0,
      },
      {
        id: 2,
        name: "Flat Screen TV - 20inch",
        type: "TV",
        code: "ET001",
        error_time: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: 0,
        sold_time: 0,
      },
      
      {
        id: 3,
        name: "Flat Screen TV - 42inch",
        type: "TV",
        code: "ET002",
        error_time: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: 0,
        sold_time: 0,
      },
  
      {
        id: 4,
        name: "Flat Screen TV - 65inch",
        type: "TV",
        code: "ET003",
        error_time: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: 0,
        sold_time: 0,
      },
  
      {
        id: 5,
        name: "Flat Screen TV - 80inch",
        type: "TV",
        code: "ET004",
        error_time: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: 0,
        sold_time: 0,
      },
  
      {
        id: 6,
        name: "Save Energy Fridges",
        type: "Fridge",
        code: "EF001",
        error_time: 0,
        price: 10,
        status: "Under Warranty",
        position: "Insurance1",
        produced_by: "Producer1",
        produced_time: 0,
        sold_time: 0,
      },
  ]

const updateTableData = function(state){
    if(state.accountType === AccountType.Admin){
        state.data = tableData
    }
    else if(state.accountType === AccountType.Seller){
        tableData.map((item) => {
            if(item.position.toLowerCase().includes("seller")){
                state.data.push(item)
            }
        })
    }
    state.lastID = tableData[tableData.length - 1].id
}
export const AuthProvider = createSlice({
    name: 'authProvider',
    initialState: {
        isCorrect: false,
        isInAccount: false,
        accountType: AccountType.None,
        data : [],
        lastID : 0,
    },
    reducers: {
        checkValidAccount: (state,data) => {  
            state.isCorrect = false
            state.isInAccount = false
            accounts.map((account) => {
                if(account.username === data.payload.username)
                {
                    if(account.password === data.payload.password){
                        state.isCorrect = true
                        state.isInAccount = true
                        state.accountType = account.type
                        updateTableData(state)                     

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
            state.data = []
        },

        addData: (state, data) => {
            const newData = tableData.slice(0, tableData.length)
            const payload = data.payload
            const newDataProduct = {
                id:state.lastID + 1,
                name:payload.name,
                type:payload.type,
                code:payload.code,
                error_time:payload.error_time,
                price: payload.price,
                status: payload.status,
                position: payload.position,
                produced_by: payload.produced_by,
                produced_time: payload.produced_time,
                sold_time: payload.sold_time,
            }
            newData.push(newDataProduct)        
            tableData = newData
            updateTableData(state)
        },

        updateData: (state, data) => {
            const newData = tableData.slice(0, tableData.length)
            const payload = data.payload
            tableData.map((item,index) => {
                if(item.id === payload.id){
                    newData[index] = {
                        id:payload.id,
                        name:payload.name,
                        type:payload.type,
                        code:payload.code,
                        error_time:payload.error_time,
                        price: payload.price,
                        status: payload.status,
                        position: payload.position,
                        produced_by: payload.produced_by,
                        produced_time: payload.produced_time,
                        sold_time: payload.sold_time,
                    }
                    return
                }
            })
            tableData = newData
            updateTableData(state)
        },

        deleteData: (state, data) => {
            const newData = tableData.slice(0, tableData.length)
            for(var i = 0; i < newData.length; i++){
                if(newData[i].id === data.payload){
                    newData.splice(i, 1)
                    break
                }
            }
            tableData = newData
            updateTableData(state)
        }
    }

})

export const { checkValidAccount, logoutAccount, updateData, addData, deleteData} = AuthProvider.actions;
export default AuthProvider.reducer;
export const selectorAuthProvider = (state) => state.authProvider;