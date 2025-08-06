import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name:"counter",
  initialState:{
    counter:888
  },
  reducers:{
    addNumber(state, {payload}){
      state.counter = state.counter + payload
    },
    subNumber(state, {payload}){
      // console.log("counter reducer subNumber", action)
      // const payload = action.payload
      state.counter = state.counter - payload

    }
  }
})

export const {addNumber,subNumber} = counterSlice.actions


export default counterSlice.reducer