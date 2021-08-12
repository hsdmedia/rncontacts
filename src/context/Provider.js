import React, { createContext, useReducer } from "react";
import authInitialState from './initialStates/authState';
import contactsInitialState from "./initialStates/contactsInitialState";
import auth from "./reducers/auth";
import contacts from "./reducers/contact";

export const GlobalContext = createContext({});
const GlobalProviders = ({ children }) =>
{
    const [authState, authDispatcher] = useReducer(auth, authInitialState);
    const [contactsState, contactsDispatcher] =
        useReducer(contacts, contactsInitialState);
    return <GlobalContext.Provider value={{
        authState, contactsState, authDispatcher, contactsDispatcher
    }}>{children}</GlobalContext.Provider>
}
export default GlobalProviders