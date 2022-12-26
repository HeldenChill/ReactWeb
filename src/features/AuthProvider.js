import { createSlice } from "@reduxjs/toolkit";



export const ProductType = ["Fan" ,"TV" ,"Fridge", "Car"]
export const ProductStatus = ["In Stock", "On Sale", "Under Warranty", "Error", "Sold", "Returned"]

export const AccountDataFields = {
    Admin: ["Name", "Type", "Code", "Error Times", "Price", "Status", "Position", "Produced By", "Produced Time", "Sold Time"],
    Producer: ["Name", "Type", "Code", "Error Times", "Status", "Position", "Produced Time", "Sold Time"],
    Seller: ["Name", "Type", "Code", "Price", "Status", "Produced Time", "Sold Time"],
    Insurance: ["Name", "Type", "Code", "Error Times", "Status", "Produced By", "Produced Time"],
    None: []
}

export const AccountProductStatus = {
    Admin: ["In Stock", "On Sale", "Under Warranty", "Error", "Sold", "Returned"],
    Producer: ["In Stock", "On Sale"],
    Seller: ["On Sale", "Under Warranty", "Sold", "Returned"],
    Insurance: ["In Stock", "Under Warranty", "Error"],
    None: []
}
export const AccountType = {
    Admin: "Admin",
    Seller: "Seller",
    Insurance: "Insurance",
    Producer: "Producer",
    None: "None"

}

export const AccountsPositions = {
    Admin: [],
    Producer: ["Producer1","Producer2"],
    Seller: ["Seller1", "Seller2", "Seller3", "Seller4"],
    Insurance: ["Insurance1","Insurance2"]

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
        error_times: 0,
        price: 10,
        status: "In Stock",
        position: "Producer1",
        produced_by: "Producer1",
        produced_time: "22-11-2022",
        sold_time: "",
        customer_id: -1,
      },
      {
        id: 1,
        name: "Ceilling Fan",
        type: "Fan",
        code: "EF002",
        error_times: 0,
        price: 10,
        status: "In Stock",
        position: "Producer1",
        produced_by: "Producer1",
        produced_time: "22-11-2022",
        sold_time: "",
        customer_id: -1,
      },
      {
        id: 2,
        name: "Flat Screen TV - 20inch",
        type: "TV",
        code: "ET001",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "22-11-2022",
        sold_time: "",
        customer_id: -1,
      },
      
      {
        id: 3,
        name: "Flat Screen TV - 42inch",
        type: "TV",
        code: "ET002",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "22-11-2022",
        sold_time: "",
        customer_id: -1,
      },
  
      {
        id: 4,
        name: "Flat Screen TV - 65inch",
        type: "TV",
        code: "ET003",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "22-11-2022",
        sold_time: "",
        customer_id: -1,
      },
  
      {
        id: 5,
        name: "Flat Screen TV - 80inch",
        type: "TV",
        code: "ET004",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "22-11-2022",
        sold_time: "",
        customer_id: -1,
      },
  
      {
        id: 6,
        name: "Save Energy Fridges",
        type: "Fridge",
        code: "EF001",
        error_times: 0,
        price: 10,
        status: "Under Warranty",
        position: "Insurance1",
        produced_by: "Producer1",
        produced_time: "22-11-2022",
        sold_time: "",
        customer_id: -1,
      },
  ]
let customerData = [
    {
        id: 0,
        name: "Henrry",
        age: 25,
        gender: "Male",
        address: "Hanoi",
        telephone: "0324678273",
        buy_product: [
                {
                    id: 1,
                    store: "Seller1",
                }
            ]
    }
]

const updateAccountData = function(state){
    if(state.accountType === AccountType.Admin){
        state.data = tableData
        state.dataFeilds = AccountDataFields.Admin
        state.statusFeild = AccountProductStatus.Admin
        state.positionFeild = [...AccountsPositions.Producer, ...AccountsPositions.Seller, ...AccountsPositions.Insurance]
        state.producedByFeild = AccountsPositions.Producer
    }
    else if(state.accountType === AccountType.Producer){
        const newData = []
        tableData.map((item) => {
            if(item.produced_by.toLocaleLowerCase().includes(state.accountPosition.toLowerCase())){
                newData.push(item)
            }
        })
        state.data = newData
        state.dataFeilds = AccountDataFields.Producer
        state.statusFeild = AccountProductStatus.Producer
        state.positionFeild = [...AccountsPositions.Producer, ...AccountsPositions.Seller]
        state.producedByFeild = AccountsPositions.Producer
    }
    else if(state.accountType === AccountType.Seller){
        const newData = []
        tableData.map((item) => {
            if(item.position.toLowerCase().includes(state.accountPosition.toLowerCase())){
                newData.push(item)
            }
        })
        state.data = newData
        state.dataFeilds = AccountDataFields.Seller
        state.statusFeild = AccountProductStatus.Seller
        state.positionFeild = [...AccountsPositions.Seller, ...AccountsPositions.Insurance]
    }
    else if(state.accountType === AccountType.Insurance){
        const newData = []
        tableData.map((item) => {
            if(item.position.toLowerCase().includes(state.accountPosition.toLowerCase())){
                newData.push(item)
            }
        })
        state.data = newData
        state.dataFeilds = AccountDataFields.Insurance
        state.statusFeild = AccountProductStatus.Insurance
        state.positionByFeild = [...AccountsPositions.Insurance, ...AccountsPositions.Producer]
    }
    state.lastID = tableData[tableData.length - 1].id
    console.log(state.data)
}
export const AuthProvider = createSlice({
    name: 'authProvider',
    initialState: {
        isCorrect: false,
        isInAccount: false,
        accountType: AccountType.None,
        accountPosition: "",
        dataFeilds: [],
        statusFeild: [],
        positionFeild: [],
        producedByFeild: [],
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
                        state.accountPosition = account.position
                        updateAccountData(state)                     
                        
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
            state.accountPosition = ""
            state.dataFeilds = AccountDataFields.None
            state.statusFeild = []
            state.positionFeild = []
            state.producedByFeild = []
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
                error_times:payload.error_times,
                price: payload.price,
                status: payload.status,
                position: payload.position,
                produced_by: payload.produced_by,
                produced_time: payload.produced_time,
                sold_time: payload.sold_time,
            }
            newData.push(newDataProduct)        
            tableData = newData
            updateAccountData(state)
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
                        error_times:payload.error_times,
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
            updateAccountData(state)
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
            updateAccountData(state)
        }
    }

})

export const { checkValidAccount, logoutAccount, updateData, addData, deleteData} = AuthProvider.actions;
export default AuthProvider.reducer;
export const selectorAuthProvider = (state) => state.authProvider;