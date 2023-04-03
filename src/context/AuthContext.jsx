import React,{ createContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)


export default AuthContext;


export const AuthProvider = ({children}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState(null)

    const login = () => {
        setUser({
            name:'Juan',
            account:'free',
        })
    }

    const logout = () => {
        setUser(null)
    }

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    let contextData ={
        user: user,
        login:login,
        logout:logout,
        isMobile:isMobile
    };

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}