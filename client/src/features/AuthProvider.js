import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const DefaultPerson = {
    _id: -1,
    name: "",
    age: 0,
    gender: "Male",
    address: "",
    telephone: "",
    buy_products: "",
    stores: "",
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
export const ProductType = ["Fan" ,"TV" ,"Fridge", "Car","Smartphone"]
export const ProductStatus = ["In Stock", "On Sale", "Under Warranty", "Error", "Sold", "Returned"]
export const DataFeilds = ["Name", "Type", "Code", "Error Times", "Price", "Status", "Position", "Produced By", "Produced Time", "Sold Time", "Customer ID"]
export const AccountFeilds = ["Username","Password","Type","Position"]
const AccountDataFields = {
    Admin: ["Name", "Type", "Code", "Error Times", "Price", "Status", "Position", "Produced By", "Produced Time", "Sold Time", "Customer ID"],
    Producer: ["Name", "Type", "Code", "Status", "Position", "Produced Time", "Sold Time"],
    Seller: ["Name", "Type", "Code", "Price", "Status", "Position", "Sold Time","Customer ID"],
    Insurance: ["Name", "Type", "Code", "Error Times", "Status", "Position","Produced By", "Produced Time","Customer ID"],
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
    Admin: ["Admin1"],
    Producer: ["Producer1"],
    Seller: ["Seller1"],
    Insurance: ["Insurance1"],
}

export const NotiType = ["error", "warning", "info", "success"]
var notifications = []
var accounts = []
// var accounts =  [
//     {
//         id: 0,
//         username: 'admin',
//         password: 'admin',
//         type: AccountType.Admin,
//         position: "Admin1",
//     },

//     {
//         id: 1,
//         username: 'seller',
//         password: 'seller',
//         type: AccountType.Seller,
//         position: "Seller1",
//     },

//     {
//         id: 2,
//         username: 'insurance',
//         password: 'insurance',
//         type: AccountType.Insurance,
//         position: "Insurance1",
//     },

//     {
//         id: 3,
//         username: 'producer',
//         password: 'producer',
//         type: AccountType.Producer,
//         position: "Producer1",
//     }
// ]
// var productData = [
//       {
//         id: 0,
//         name: "Electric Fan",
//         type: "Fan",
//         code: "EF001",
//         error_times: 0,
//         price: 10,
//         status: "In Stock",
//         position: "Producer1",
//         produced_by: "Producer1",
//         produced_time: "2022-11-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
//       {
//         id: 1,
//         name: "Ceilling Fan",
//         type: "Fan",
//         code: "EF002",
//         error_times: 0,
//         price: 10,
//         status: "In Stock",
//         position: "Producer1",
//         produced_by: "Producer1",
//         produced_time: "2022-11-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
//       {
//         id: 2,
//         name: "Flat Screen TV - 20inch",
//         type: "TV",
//         code: "ET001",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-01-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
      
//       {
//         id: 3,
//         name: "Flat Screen TV - 42inch",
//         type: "TV",
//         code: "ET002",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-03-12",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
  
//       {
//         id: 4,
//         name: "Flat Screen TV - 65inch",
//         type: "TV",
//         code: "ET003",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-04-05",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
  
//       {
//         id: 5,
//         name: "Flat Screen TV - 80inch",
//         type: "TV",
//         code: "ET004",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-06-02",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
  
//       {
//         id: 6,
//         name: "Save Energy Fridges",
//         type: "Fridge",
//         code: "EF001",
//         error_times: 0,
//         price: 10,
//         status: "Under Warranty",
//         position: "Insurance1",
//         produced_by: "Producer1",
//         produced_time: "2022-11-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
//       {
//         id: 7,
//         name: "Electric Fan",
//         type: "Fan",
//         code: "EF001",
//         error_times: 0,
//         price: 10,
//         status: "In Stock",
//         position: "Producer1",
//         produced_by: "Producer1",
//         produced_time: "2022-10-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
//       {
//         id: 8,
//         name: "Ceilling Fan",
//         type: "Fan",
//         code: "EF002",
//         error_times: 0,
//         price: 10,
//         status: "In Stock",
//         position: "Producer1",
//         produced_by: "Producer1",
//         produced_time: "2022-08-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
//       {
//         id: 9,
//         name: "Flat Screen TV - 20inch",
//         type: "TV",
//         code: "ET001",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-12-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
      
//       {
//         id: 10,
//         name: "Flat Screen TV - 42inch",
//         type: "TV",
//         code: "ET002",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-08-10",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
  
//       {
//         id: 11,
//         name: "Flat Screen TV - 65inch",
//         type: "TV",
//         code: "ET003",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-11-11",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
  
//       {
//         id: 12,
//         name: "Flat Screen TV - 80inch",
//         type: "TV",
//         code: "ET004",
//         error_times: 0,
//         price: 10,
//         status: "On Sale",
//         position: "Seller1",
//         produced_by: "Producer1",
//         produced_time: "2022-12-22",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
  
//       {
//         id: 13,
//         name: "Save Energy Fridges",
//         type: "Fridge",
//         code: "EF001",
//         error_times: 0,
//         price: 10,
//         status: "Under Warranty",
//         position: "Insurance1",
//         produced_by: "Producer1",
//         produced_time: "2022-05-04",
//         sold_time: "",
//         customer_id: -1,
//         sold_by: "",
//       },
//   ]
var productData = []
var customerData = []
// var customerData = [
//     {
//         id: 0,
//         name: "Henrry",
//         age: 25,
//         gender: "Male",
//         address: "Hanoi",
//         telephone: "0324678273",
//         buy_products: [1],
//         stores: ["Seller1"]
//     }
// ]

const UpdateState = function(state){
    
    let producer = []
    let seller = []
    let insurance = []
    let i = 0
    for(i = 0; i < accounts.length; i++){
        if(accounts[i].type === AccountType.Producer){
            let isDup = false
            for(let j = 0; j < producer.length; j++){
                if(accounts[i].position.toLowerCase() === producer[j].toLowerCase()){
                    isDup = true
                    break
                }
            }
            if(!isDup){
                producer.push(accounts[i].position)
            }

        }
        else if(accounts[i].type === AccountType.Seller){
            let isDup = false
            for(let j = 0; j < seller.length; j++){
                if(accounts[i].position.toLowerCase() === seller[j].toLowerCase()){
                    isDup = true
                    break
                }
            }
            if(!isDup){
                seller.push(accounts[i].position)
            }
        }
        else if(accounts[i].type === AccountType.Insurance){
            let isDup = false
            for(let j = 0; j < insurance.length; j++){
                if(accounts[i].position.toLowerCase() === insurance[j].toLowerCase()){
                    isDup = true
                    break
                }
            }
            if(!isDup){
                insurance.push(accounts[i].position)
            }
            
        }
    }

    AccountsPositions = {Admin: [], Producer: producer, Seller: seller, Insurance: insurance}

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
            if(item.produced_by.toLowerCase().includes(state.accountPosition.toLowerCase())){
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

    const newNotiData = []
    for(i = 0; i < notifications.length; i++){
        if(notifications[i].des_position.toLowerCase().includes(state.accountPosition.toLowerCase())){
            newNotiData.push(notifications[i])
        }
    }
    state.notifications = newNotiData

    
}

export const FetchServerData = async function(type){
    let res = await axios.get(`http://localhost:4000/api/${type}`).then(
            (response) => {
                if(type === "account")
                    accounts = response.data    
                else if(type === "customer"){
                    customerData = response.data
                }      
                else if(type === "product"){
                    productData = response.data
                }     
                else if("notification"){
                    notifications  = response.data
                }
            }                
        )
    return res
}


export const PostServerData = async function(data, type){
    let res = await axios.post(`http://localhost:4000/api/${type}`,data)
    return res
}

export const PutServerData = async function(id, data, type){
    let res = await axios.put(`http://localhost:4000/api/${type}/${id}`, data)
    return res
}

export const DeleteServerData = async function(id, type){
    let res = await axios.delete(`http://localhost:4000/api/${type}/${id}`)
    return res
}

export const FetchAllData = async function(){  
    let res = await Promise.all([axios.get(`http://localhost:4000/api/product`).then((response) => {
        accounts = response.data   
    }), await axios.get(`http://localhost:4000/api/customer`).then((response) => {
        customerData = response.data   
    })]) 
    
    return res
    // await axios.get(`http://localhost:4000/api/product`)
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
        notifications: [],
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
            state.notifications = []
            productData = []
            customerData = []
            accounts = []
        },

        updateAccountData: (state) => {
            UpdateState(state)
        },

        fetchData: (state) => {
            FetchServerData("account")
            FetchServerData("product")
            FetchServerData("customer")
            UpdateState()
        }
    }

})

export const { checkValidAccount, logoutAccount,updateAccountData, fetchData} = AuthProvider.actions;
export default AuthProvider.reducer;
export const selectorAuthProvider = (state) => state.authProvider;