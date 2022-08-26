import { useState } from "react"
import { createContext } from "react"

export const AccountContext = createContext({
    token: undefined,
    setToken: () => {}
})

export default function AccountContainer(props){

    const [token, setToken] = useState(undefined)

    return(
        <AccountContext.Provider value={{
            token,
            setToken
        }}>
            {props.children}
        </AccountContext.Provider>
    )
}