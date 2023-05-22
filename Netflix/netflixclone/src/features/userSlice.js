

//redux is global store to dispatch action  like login and logout they both affect the user section of the stotre
import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   login: (state,action ) =>
  {
    state.user =action.payload;//set the user on payload
  }  ,
  logout: (state)=>
{
  
  //restting user back to null
  state.user=null;
}
},
});

export const { login,logout} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;



export default userSlice.reducer;
