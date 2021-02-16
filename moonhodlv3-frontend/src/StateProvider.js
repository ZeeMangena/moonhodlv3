import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//This raps the entire app in index.js
//Every component it raps is considered a child component and has access to the State
//iState and reducer passed as props which are imported from reducer.js

export const useStateValue = () => useContext(StateContext);
