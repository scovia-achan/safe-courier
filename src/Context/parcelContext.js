import React, {createContext, useContext, useReducer} from 'react'
// data layer for the parcels.

export const StateContext = createContext()

// Provider
export const StateProvider = ({reducer, initialState, children}) =>{
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext)
