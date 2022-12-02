import { configureStore } from '@reduxjs/toolkit'
import checkAccountReducers  from './CheckAccount'
export default configureStore({
  reducer: {
      checkAccount: checkAccountReducers,
  }
})


