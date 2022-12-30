import { configureStore } from '@reduxjs/toolkit'
import authProviderReducers  from './AuthProvider'
export default configureStore({
  reducer: {
      authProvider: authProviderReducers,
  }
})


