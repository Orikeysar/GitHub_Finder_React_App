import { createContext, useReducer } from "react";
import GithubReducer from "../GithubReducer";
//הגדרת השרתים שמהם נקח מידע
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //איתחול המידע של משתמש וטעינה עלי ידי רידוסר
  const ititialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  //הפונקציה ששולחת לרידוסר מקבלת מצב ואת הפונקציה לשליחה
  const [state, dispatch] = useReducer(GithubReducer, ititialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
