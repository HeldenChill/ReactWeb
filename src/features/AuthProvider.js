import { createSlice } from "@reduxjs/toolkit";

export const DefaultPerson = {
    id: -1,
    name: "",
    age: 0,
    gender: "Male",
    address: "",
    telephone: "",
    buy_products: [],
    stores: [],
}
export const DefaultProduct = {
    id: -1,
    name: "",
    type: "Fan",
    code: "",
    error_times: 0,
    price: 0,
    status: "In Stock",
    position: "",
    produced_by: "Producer1",
    produced_time: "",
    sold_time: "",
    customer_id: -1,
    sold_by: "",
  }
export const ProductType = ["Fan" ,"TV" ,"Fridge", "Car"]
export const ProductStatus = ["In Stock", "On Sale", "Under Warranty", "Error", "Sold", "Returned"]
export const DataFeilds = ["Name", "Type", "Code", "Error Times", "Price", "Status", "Position", "Produced By", "Produced Time", "Sold Time", "Customer ID"]
export const AccountFeilds = ["Username","Password","Type","Position"]
const AccountDataFields = {
    Admin: ["Name", "Type", "Code", "Error Times", "Price", "Status", "Position", "Produced By", "Produced Time", "Sold Time", "Customer ID"],
    Producer: ["Name", "Type", "Code", "Status", "Position", "Produced Time", "Sold Time"],
    Seller: ["Name", "Type", "Code", "Price", "Status", "Position", "Sold Time"],
    Insurance: ["Name", "Type", "Code", "Error Times", "Status", "Position","Produced By", "Produced Time"],
    None: []
}
const AccountProductStatus = {
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
export const CustomerDataFeilds = ["Id", "Name" , "Age", "Gender", "Address", "Telephone"]
var AccountsPositions = {
    Admin: [],
    Producer: ["Producer1","Producer2"],
    Seller: ["Seller1", "Seller2", "Seller3", "Seller4"],
    Insurance: ["Insurance1","Insurance2"],
}

var accounts =  [
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

var productData = [
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
        produced_time: "2022-11-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
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
        produced_time: "2022-11-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
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
        produced_time: "2022-01-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
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
        produced_time: "2022-03-12",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
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
        produced_time: "2022-04-05",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
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
        produced_time: "2022-06-02",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
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
        produced_time: "2022-11-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
      {
        id: 7,
        name: "Electric Fan",
        type: "Fan",
        code: "EF001",
        error_times: 0,
        price: 10,
        status: "In Stock",
        position: "Producer1",
        produced_by: "Producer1",
        produced_time: "2022-10-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
      {
        id: 8,
        name: "Ceilling Fan",
        type: "Fan",
        code: "EF002",
        error_times: 0,
        price: 10,
        status: "In Stock",
        position: "Producer1",
        produced_by: "Producer1",
        produced_time: "2022-08-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
      {
        id: 9,
        name: "Flat Screen TV - 20inch",
        type: "TV",
        code: "ET001",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "2022-12-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
      
      {
        id: 10,
        name: "Flat Screen TV - 42inch",
        type: "TV",
        code: "ET002",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "2022-08-10",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
  
      {
        id: 11,
        name: "Flat Screen TV - 65inch",
        type: "TV",
        code: "ET003",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "2022-11-11",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
  
      {
        id: 12,
        name: "Flat Screen TV - 80inch",
        type: "TV",
        code: "ET004",
        error_times: 0,
        price: 10,
        status: "On Sale",
        position: "Seller1",
        produced_by: "Producer1",
        produced_time: "2022-12-22",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
  
      {
        id: 13,
        name: "Save Energy Fridges",
        type: "Fridge",
        code: "EF001",
        error_times: 0,
        price: 10,
        status: "Under Warranty",
        position: "Insurance1",
        produced_by: "Producer1",
        produced_time: "2022-05-04",
        sold_time: "",
        customer_id: -1,
        sold_by: "",
      },
  ]
var customerData = [
    {
        id: 0,
        name: "Henrry",
        age: 25,
        gender: "Male",
        address: "Hanoi",
        telephone: "0324678273",
        buy_products: [1],
        stores: ["Seller1"]
    }
]

const UpdateState = function(state){
    if(state.accountType === AccountType.Admin){
        state.data = productData
        state.dataFeilds = AccountDataFields.Admin
        state.statusFeild = AccountProductStatus.Admin
        state.positionFeild = [...AccountsPositions.Producer, ...AccountsPositions.Seller, ...AccountsPositions.Insurance]
        state.customerData = customerData
        state.accountData = accounts
    }
    else if(state.accountType === AccountType.Producer){
        const newData = []
        productData.map((item) => {
            if(item.produced_by.toLocaleLowerCase().includes(state.accountPosition.toLowerCase())){
                newData.push(item)
            }
        })
        state.data = newData
        state.dataFeilds = AccountDataFields.Producer
        state.statusFeild = AccountProductStatus.Producer
        state.positionFeild = [...AccountsPositions.Producer, ...AccountsPositions.Seller]       
    }
    else if(state.accountType === AccountType.Seller){
        const newData = []
        productData.map((item) => {
            if(item.position.toLowerCase().includes(state.accountPosition.toLowerCase())){
                newData.push(item)
            }
        })
        state.data = newData
        state.dataFeilds = AccountDataFields.Seller
        state.statusFeild = AccountProductStatus.Seller
        state.positionFeild = [...AccountsPositions.Seller, ...AccountsPositions.Insurance]
        state.customerData = customerData
    }
    else if(state.accountType === AccountType.Insurance){
        const newData = []
        productData.map((item) => {
            if(item.position.toLowerCase().includes(state.accountPosition.toLowerCase())){
                newData.push(item)
            }
        })
        state.data = newData
        state.dataFeilds = AccountDataFields.Insurance
        state.statusFeild = AccountProductStatus.Insurance
        state.positionByFeild = [...AccountsPositions.Insurance, ...AccountsPositions.Producer]
        state.producedByFeild = AccountsPositions.Producer
        state.positionFeild = [ ...AccountsPositions.Producer, ...AccountsPositions.Seller,...AccountsPositions.Insurance]
    }
    state.producedByFeild = AccountsPositions.Producer
    state.allPositionFeild = [...AccountsPositions.Producer, ...AccountsPositions.Seller, ...AccountsPositions.Insurance]
    state.lastID = productData[productData.length - 1].id
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
        producedByFeild:[],
        allPositionFeild: [],
        data : [],
        customerData: [],
        accountData: [],
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
                        UpdateState(state)                     
                        
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
            state.customerData = []
            state.accountData = []
            state.data = []
        },

        addData: (state, data) => {
            const newData = productData.slice(0, productData.length)
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
                customer_id: payload.customer_id,
                sold_by: payload.sold_by,
            }
            newData.push(newDataProduct)        
            productData = newData     
            console.log("ADD PRODUCT")               
            UpdateState(state)
        },

        updateData: (state, data) => {        
            const newData = productData.slice(0, productData.length)
            const payload = data.payload
            productData.map((item,index) => {
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
                        customer_id: payload.customer_id,
                        sold_by: payload.sold_by,
                    }
                    return
                }
            })
            productData = newData               
            UpdateState(state)
        },

        deleteData: (state, data) => {
            const newData = productData.slice(0, productData.length)
            for(var i = 0; i < newData.length; i++){
                if(newData[i].id === data.payload){
                    newData.splice(i, 1)
                    break
                }
            }
            productData = newData
            UpdateState(state)
        },
        addCustomerData: (state,data) => {
            const newData = customerData.slice(0, customerData.length)
            const payload = data.payload
            const newDataProduct = {
                id:customerData[customerData.length - 1].id + 1,
                name:payload.name,
                age: payload.age,
                gender: payload.gender,
                address: payload.address,
                telephone: payload.telephone,
                buy_products: payload.products,
                stores: payload.stores
            }
            newData.push(newDataProduct)        
            customerData = newData
            console.log("ADD CUSTOMER")
            UpdateState(state)
        },
        updateCustomerData: (state, data) => {
            const newData = customerData.slice(0, customerData.length)
            const payload = data.payload
            customerData.map((item,index) => {
                if(item.id === payload.id){
                    newData[index] = {
                        id:payload.id,
                        name:payload.name,
                        age: payload.age,
                        gender: payload.gender,
                        address: payload.address,
                        telephone: payload.telephone,
                        buy_products: payload.products,
                        stores: payload.stores
                    }
                    return
                }
            })
            customerData = newData
            UpdateState(state)
        },
        deleteCustomerData: (state, data) => {
            const newData = customerData.slice(0, customerData.length)
            for(var i = 0; i < newData.length; i++){
                if(newData[i].id === data.payload){
                    newData.splice(i, 1)
                    break
                }
            }
            customerData = newData
            UpdateState(state)
        },
        addAccountData: (state, data) => {

        },
        updateAccountData: (state, data) => {

        },
        deleteAccountData: (state, data) => {

        }
    }

})

export const { checkValidAccount, logoutAccount, updateData, addData, deleteData,
                addCustomerData, updateCustomerData, deleteCustomerData,
                addAccountData, updateAccountData, deleteAccountData} = AuthProvider.actions;
export default AuthProvider.reducer;
export const selectorAuthProvider = (state) => state.authProvider;