import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo : null ,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo : (state,action) => {
        state.userInfo = action.payload
    },
    userSignOut : (state) => {
      state.userInfo = null
  }
  },
})

// Action creators are generated for each case reducer function
export const {setUserInfo , userSignOut } = userSlice.actions

export default userSlice.reducer