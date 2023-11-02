import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
   { name:'user',
    initalState:null,
    reducers:{
      addUser:(state, action) =>{
          return action.payload;
      },
      removeUser:(state,actions) =>{
         return null;
      }
    }
}

)

export const  {addUser,removeUser} = userSlice.actions;
export default userSlice;