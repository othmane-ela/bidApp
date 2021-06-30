import React from 'react'

/**
 * CREATING USER CONTEXT
 */
export const UserContext = React.createContext({
    user: null,
    setUser: () => { }
})
