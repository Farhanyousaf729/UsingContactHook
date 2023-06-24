import { createContext, useContext } from "react"
import { useState, useEffect } from 'react'


type StateType = {
    api: any[];
    empty: any[];
    setstate: (c: any) => any;
  };
  
  const initialState: StateType = {
    api: [],
    empty: [],
    setstate: () => {}
  };

export const AppContext = createContext(initialState)

export const ContextProvider = ({ children }: any) => {

    const myApi = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        return setstate({...state,api:data})
    }
    useEffect(() => {
        myApi()
    }, [])
    
   
    const [state, setstate] = useState<StateType>(initialState);

    // console.log(state);

    return (
        <AppContext.Provider value={{...state,setstate }}>
            {children}
        </AppContext.Provider>
    )
}