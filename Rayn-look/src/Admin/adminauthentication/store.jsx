import { configureStore } from '@reduxjs/toolkit'
import authReducer from './autheslice';
export default configureStore({
  reducer: {
    auth: authReducer
  },
})