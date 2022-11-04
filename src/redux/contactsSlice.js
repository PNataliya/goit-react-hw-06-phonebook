import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Kelly Rut', number: '459-12-56' },
  { id: 'id-2', name: 'Robby Cool', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Monro', number: '645-17-79' },
  { id: 'id-4', name: 'Ann Coper', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.find(contact => contact.name === action.payload.name)) {
          alert(`${action.payload.name} is already in contacts`);
          return;
        }
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    // addContact: {
    //   reducer(state, action) {
    //     return [...state, action.payload];
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name: name,
    //         number: number,
    //       },
    //     };
    //   },
    // },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
