import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


  const contactSlice = createSlice({
    name: 'contacts',
    initialState:{contacts:[],filter:''},
    reducers:{
        addContact:{
            reducer(state,{payload}){
                state.contacts.push(payload)
            },
            prepare({values}){
                
                return{
                    payload: { 
                        name:values.name,
                        number:values.number,
                        id: nanoid(),
                    },
                  
                 };
            }
        },

        deleteContact:{
            reducer(state,action){
                const index = state.contacts.findIndex(contact=>contact.id === action.payload);
                state.contacts.splice(index,1);
            }
        },
        setFilterValue(state, action) {
            state.filter = action.payload;
          },
  }})

  const contactsPersistConfig = {
    key: 'contacts',
    version: 1,
    storage,
    blacklist: ['filter'],
  };
  
  export const persisteContactReducer = persistReducer(
    contactsPersistConfig,
    contactSlice.reducer
  );


export const {addContact,deleteContact,setFilterValue} = contactSlice.actions;
export  const contactsReducer= contactSlice.reducer;