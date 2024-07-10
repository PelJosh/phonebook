import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Contact {
  name: string;
  phoneNumber: string;
  email: string;
  addresses: string[];
  longitude: number;
  latitude: number;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
