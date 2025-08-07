import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidataAction = createAsyncThunk("fetch/homemultidata",async () => {
  const res = await axios.get("http://123.207.32.32:8000/home/multidata")
  // const banners = res.data.data.banner.list
  // const recommends = res.data.data.recommend.list

  return res.data
})

const obj = {
  name:'hahah'
}

const homeSlice = createSlice({
  name:'home',
  initialState:{
    banners:[],
    recommends:[]
  },
  reducers:{
    changeBanners(state,{payload}){
      state.banners = payload
    },
    changeRecommends(state,{payload}){
      state.recommends = payload
    }
  },
  // extraReducers:{
  //   // [obj.name](){

  //   // },
  //   [fetchHomeMultidataAction.pending](state, action){
  //     console.log("fetchHomeMultidataAction pending")
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state,action){
  //     console.log("fetchHomeMultidataAction fulfilled")
  //   },
  //   [fetchHomeMultidataAction.rejected](state,action){
  //     console.log("fetchHomeMultidataAction rejected")
  //   }
  // }
  extraReducers: (builder) => {
    builder
      // .addCase(fetchHomeMultidataAction.pending, (state, action) => {
      //   console.log("fetchHomeMultidataAction pending")
      // })
      .addCase(fetchHomeMultidataAction.fulfilled, (state, {payload}) => {
        // console.log("fetchHomeMultidataAction fulfilled",payload)
        state.banners = payload.data.banner.list
        state.recommends = payload.data.recommend.list
      })
      // .addCase(fetchHomeMultidataAction.rejected, (state, action) => {
      //   console.log("fetchHomeMultidataAction rejected")
      // })
  }
})

export const {changeBanners,changeRecommends} = homeSlice.actions

export default homeSlice.reducer